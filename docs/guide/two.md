# 项目配置

## eslint 配置

1. 安装 **eslint**

```sh
$ pnpm i eslint -D
```

2. 生成配置文件 **.eslintrc.js**

```sh
$ pnpm create @eslint/config
```

根据项目需要，完成问题选择:
![eslint 配置](/images/UG0OQattZ9.png)

```js [.eslintrc.js]
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:vue/vue3-essential"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    // eslint (https://eslint.org/docs/rules/)
    // typescript (https://typescript-eslint.io/rules)
    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
  },
}
```

3. 新建检查忽略文件 **.eslintignore**

添加一下内容：

```md
dist
node_modules
```

4. 修改 **package.json**

我们只需要检查 `src` 目录下的文件，所以需要修改部分命令：

```json
"scripts": {
    "lint": "eslint src",
    "fix": "eslint src --fix",
}
```

## husky 配置

1. 初始化 git 仓库

```sh
$ git init
```

2. 安装 **husky**

```sh
$ pnpm install husky -D
```

3. 初始化 husky

```sh
$ npx husky-init
```

将会在根目录下生成一个 `.husky` 目录，在这个目录下面有一个 `pre-commit` 文件，这个文件里面的命令在提交代码时执行。

例如，在提交前先执行 `pnpm run lint` 命令，进行代码检查。

```md
#!/usr/bin/env sh
. "$(dirname -- "$0")/\_/husky.sh"

pnpm run lint
```

## commitlint 配置

1. 安装依赖

```sh
$ pnpm add -D @commitlint/config-conventional @commitlint/cli
```

2. 新建配置文件 **commitlint.config.cjs**

```js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新特性、新功能
        "fix", // 修改bug
        "docs", // 文档修改
        "style", // 代码格式修改, 注意不是 css 修改
        "refactor", // 代码重构
        "perf", // 优化相关，比如提升性能、体验
        "test", // 测试用例修改
        "chore", // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
        "revert", // 回滚到上一个版本
        "build", // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
      ],
    ],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
}
```

3. 修改 **package.json**

```json
"scripts": {
    "commitlint": "commitlint --config commitlint.config.cjs -e -V"
}
```

4. 添加 **.husky/commit-msg**

```sh
$ npx husky add .husky/commit-msg
```

在 `.husky/commit-msg` 文件中添加如下内容:

```md
#!/usr/bin/env sh
. "$(dirname -- "$0")/\_/husky.sh"

pnpm run commitlint
```

## 统一使用 pnpm 包管理工具

1. 团队协作时有必要统一包管理工具，在根目录新建 `scripts/preinstall.js` 文件，添加如下内容:

```js
if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(`\u001b[33mThis repository must using pnpm as the package manager ` + ` for scripts to work properly.\u001b[39m\n`)
  process.exit(1)
}
```

2. 修改 **package.json**

```json
"scripts": {
    "preinstall": "node ./scripts/preinstall.js"
}
```
