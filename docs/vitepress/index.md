# VitePress 入门教程

VitePress 是一个静态站点生成器 （SSG），旨在构建快速、以内容为中心的网站。简而言之，VitePress 获取用 Markdown 编写的源内容，为其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

## 安装

### 先前准备

- 安装 [Node.js](https://nodejs.org/) <Badge type="tip" text="版本不低于18" />
- 安装支持 Markdown 语法的文本编辑器，推荐使用[VSCode](https://code.visualstudio.com/)

VitePress 可以单独使用，也可以安装到现有项目中。在这两种情况下，您都可以使用以下命令安装它：

::: code-group

```sh [npm]
$ npm add -D vitepress
```

```sh [pnpm]
$ pnpm add -D vitepress
```

```sh [yarn]
$ yarn add -D vitepress
```

```sh [bun]
$ bun add -D vitepress
```

:::

::: warning 注意
VitePress 仅支持 ESM 模块规范，因此安装完成后请在`package.json`中补充`"type": "module"`。当然，您也可以访问[官方教程及说明](https://vitepress.dev/guide/getting-started)，了解更多的方式。
:::

### 初始化向导

VitePress 附带一个命令行设置向导，可帮助您搭建基本项目的基架。安装后，通过运行以下命令启动向导：

::: code-group

```sh [npm]
$ npx vitepress init
```

```sh [pnpm]

$ pnpm dlx vitepress init
```

```sh [bun]

$ bunx vitepress init
```

:::

您会看到几个简单的问题：

```md
┌ Welcome to VitePress!
│
◇ Where should VitePress initialize the config?
│ ./docs
│
◇ Site title:
│ My Awesome Project
│
◇ Site description:
│ A VitePress Site
│
◆ Theme:
│ ● Default Theme (Out of the box, good-looking docs)
│ ○ Default Theme + Customization
│ ○ Custom Theme
└
```

### 项目结构

假设您选择在 `./docs` 中搭建 VitePress 项目的基架，生成的文件结构应如下所示：

```md
.
├─ docs
│ ├─ .vitepress
│ │ └─ config.mjs
│ ├─ api-examples.md
│ ├─ markdown-examples.md
│ └─ index.md
└─ package.json
```

该 docs 目录被视为 VitePress 站点的项目根目录。该 .vitepress 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的保留位置。

## 定制

VitePress 默认以 `index.md` 作为站点的主页，而 `./vitepress/config.mjs` 会作为全局配置文件，您可以利用它们来个性化定制自己的站点。

### 主页

```md
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: VitePress入门教程
  text: 你好，年轻人
  tagline: 不积跬步，无以至千里
  image:
    src: /LOGO.png
  actions:
    - theme: brand
      text: 星球1
      link: /markdown-examples
    - theme: alt
      text: 星球2
      link: /api-examples
    - theme: alt
      text: 黑洞1
      link: /guide/
    - theme: alt
      text: 黑洞2
      link: /config/

features:
  - icon: 🚗
    title: 快速上手
    details: 技术资源
  - icon: 📦
    title: 百宝箱
    details: 大大的惊喜
  - icon: 🛠️
    title: 特殊工具
    details: 谨防电信诈骗
---
```

### 站点配置

假设您的其它 Vue 项目是部署在服务器 `/` 根路径下的，您准备将 VitePress 部署到 `/docs` 路径下，那么您需要在 `config.mjs` 中配置 `base` 为 `/docs/`。同样地，配置标签页的图标时，您也需要在 `head` 选项中 `href` 属性前添加 `base` 的路径。需要注意的是，您可以在 docs 目录下新建 public 目录，因为 VitePress 与 Vue 项目一致，项目构建时默认会将 public 目录下的静态资源移至项目根路径。

```js
import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点配置
  base: "/docs/",
  title: "VitePress入门教程",
  titleTemplate: "VitePress模板",
  description: "快速搭建文档站点",
  head: [["link", { rel: "icon", href: "/docs/favicon.ico" }]],

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // ...
  },
})
```

### 主题配置

主题配置项有很多，您可以有选择性的展示想要的内容。

#### 站点名

```js
import { defineConfig } from "vitepress"

export default defineConfig({
  // 主题配置
  themeConfig: {
    siteTitle: "VitePress入门教程",
    // ...
  },
})
```

#### LOGO

```js
import { defineConfig } from "vitepress"

export default defineConfig({
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    // ...
  },
})
```

#### 搜索

VitePress 支持使用浏览器内索引进行模糊全文搜索，这要归功于迷你搜索。要启用此功能，只需将 themeConfig.search.provider 选项设置为 'local'。当然，如果您不满足于简单的搜索，也可以使用第三方的搜索服务 `Algolia` ，VitePress 是支持的。

```js
import { defineConfig } from "vitepress"

export default defineConfig({
  // 主题配置
  themeConfig: {
    search: {
      provider: "local",
    },
    // ...
  },
})
```

#### 导航菜单

VitePress 有多种方式设置导航菜单项，支持多级、可分组以及外链。

```js
import { defineConfig } from "vitepress"

export default defineConfig({
  // 主题配置
  themeConfig: {
    nav: [
      { text: "🎈VitePress入门教程", link: "/vitepress/", activeMatch: "/vitepress/" },
      { text: "⚡最新", link: "/guide/", activeMatch: "/guide/" },
      { text: "🔥最热", link: "/config/", activeMatch: "/config/" },
      {
        text: "🎲分类",
        activeMatch: "/category/",
        items: [
          {
            text: "收藏",
            link: "/category/collection/",
            activeMatch: "/category/collection/",
          },
          {
            text: "经典",
            link: "/category/classic/",
            activeMatch: "/category/classic/",
          },
        ],
      },
      {
        text: "📚杂项",
        activeMatch: "/sundry/",
        items: [
          {
            text: "Vue相关",
            items: [
              {
                text: "What",
                link: "/sundry/vue/what/",
                activeMatch: "/sundry/vue/what/",
              },
              {
                text: "How",
                link: "/sundry/vue/how/",
                activeMatch: "/sundry/vue/how/",
              },
            ],
          },
          {
            text: "Node相关",
            items: [
              {
                text: "What",
                link: "/sundry/node/what/",
                activeMatch: "/sundry/node/what/",
              },
              {
                text: "How",
                link: "/sundry/node/how/",
                activeMatch: "/sundry/node/how/",
              },
            ],
          },
        ],
      },
      {
        text: "🚀外链",
        link: "https://www.baidu.com",
        target: "_blank",
        rel: "external",
      },
    ],
    // ...
  },
})
```

#### 侧边栏

每个导航菜单项都可以配置对应的侧边栏，您只需要配置好相应的文档路径。侧边栏的键名与导航菜单的 `activeMatch` 属性值对应，用于导航菜单项高亮。

<details>
<summary>点击显示/折叠代码</summary>

```js
import { defineConfig } from "vitepress"

export default defineConfig({
  // 主题配置
  themeConfig: {
    sidebar: {
      "/guide/": [
        {
          text: "Guide",
          items: [
            { text: "Index", link: "/guide/" },
            { text: "One", link: "/guide/one" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
      "/config/": [
        {
          text: "Config",
          items: [
            { text: "Index", link: "/config/" },
            { text: "One", link: "/config/one" },
            { text: "Two", link: "/config/two" },
          ],
        },
      ],
      "/category/collection/": [
        {
          text: "Collection",
          items: [
            { text: "Index", link: "/category/collection/" },
            { text: "One", link: "/category/collection/one" },
            { text: "Two", link: "/category/collection/two" },
          ],
        },
      ],
      "/category/classic/": [
        {
          text: "Classic",
          items: [
            { text: "Index", link: "/category/classic/" },
            { text: "One", link: "/category/classic/one" },
            { text: "Two", link: "/category/classic/two" },
          ],
        },
      ],
      // ...
    },
    // ...
  },
})
```

</details>

#### 大纲

您可以设置 `outline` 里的 `level` 选项来显示不同的层级，可以是数字、`"deep"`、或者元组 `[2, 4]`指定最值，同时支持页面单独配置覆盖。

```js
import { defineConfig } from "vitepress"

export default defineConfig({
  // 主题配置
  themeConfig: {
    outline: {
      label: "目录",
      level: "deep",
    },
    // ...
  },
})
```

#### 社交链接

您可以定义属性 `socialLinks` 以在导航中显示带有图标的社交帐户链接，icon 选项支持使用 svg 标签自定义图标。

```js
import { defineConfig } from "vitepress"

export default defineConfig({
  // 主题配置
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress", ariaLabel: "github" }],
    // ...
  },
})
```

#### 页脚

```js
import { defineConfig } from "vitepress"

export default defineConfig({
  // 主题配置
  themeConfig: {
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // ...
  },
})
```

## 启动

VitePress 会将以下 npm 脚本注入到 package.json 中，您可以使用这些脚本来启动开发服务器、构建生产环境。

```json
{
  // ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
  // ...
}
```

`docs:dev` 脚本将启动具有即时热更新的本地开发服务器，使用以下命令运行它：

::: code-group

```sh [npm]
$ npm run docs:dev
```

```sh [pnpm]
$ pnpm run docs:dev
```

```sh [yarn]
$ yarn docs:dev
```

```sh [bun]
$ bun run docs:dev
```

:::

除了 npm 脚本，您还可以直接调用 VitePress ：

::: code-group

```sh [npm]
$ npx vitepress dev docs
```

```sh [pnpm]
$ pnpm exec vitepress dev docs
```

```sh [bun]
$ bunx vitepress dev docs
```

:::

如此，VitePress 将在 `http://localhost:5173/docs` 上运行，访问该链接以查看您的文档站点运行情况！

::: tip 提示
迫不及待地想尝试？更多内容请访问[VitePress 官网](https://vitepress.dev/)。
:::

## 部署

站点编辑完成后，您可以使用以下命令进行构建：

::: code-group

```sh [npm]
$ npm run docs:build
```

```sh [pnpm]
$ pnpm run docs:build
```

:::

构建完成后会在 `.vitepress` 目录下生成 `dist` 文件夹，您可以将其部署到服务器上。这里以 Windows 下的 Nginx 为例，假设您的项目根路径为 `dist` 目录，目前里面存放的是 Vue 项目资源，可以将刚才构建好的 `dist` 文件夹复制到根目录下，然后重命名为 `docs`，再修改 `nginx.conf` 配置文件如下：

```nginx {12-16}
# ...

server {
    # ...

    location / {
        root dist;
        index index.html index.htm;
        try_files $uri $uri/ @router;
    }

    location /docs { // [!code focus:5]
        root dist;
        index index.html index.htm;
        try_files $uri $uri/ /docs/index.html;
    }

    location @router {
        rewrite (static/.*)$ /$1 redirect;
        rewrite ^.*$ /index.html last;
    }

    location /prod-api/ {
        proxy_pass http://127.0.0.1:8000/;
    }

    location /version.json {
        root dist;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
        if ($request_method = 'OPTIONS') {
            return 204;
        }
        try_files $uri =404;
    }

    # ...
}

# ...
```

配置完 Nginx 后，您可以使用[WinSW](https://github.com/winsw/winsw/releases)工具设置 Nginx 开机自启动。

1. 下载 WinSW 安装包，复制到 Nginx 应用目录下，并重命名为 `nginx-service.exe`
   ![下载 WinSW](/images/8nvCFu0XlR.png)
2. 新建 `server-logs` 文件夹，用于存储日志文件
3. 新建 `nginx-service.xml` 文件，内容如下，具体路径根据您的实际情况来改：
   ```xml
   <!-- nginx-service.xml -->
   <service>
    <id>nginx</id>
    <name>nginx</name>
    <description>nginx</description>
    <logpath>C:\nginx-1.24.0\server-logs\</logpath>
    <logmode>roll</logmode>
    <depend></depend>
    <executable>C:\nginx-1.24.0\nginx.exe</executable>
    <stopexecutable>C:\nginx-1.24.0\nginx.exe -s stop</stopexecutable>
   </service>
   ```
   ![下载 WinSW](/images/On6UEQFDlQ.png)
4. 打开终端，切换到 Nginx 应用目录，执行 `.\nginx-service.exe install` 安装服务
5. 打开 Windows 服务，找到 nginx 服务设置启动方式为自动并启动

## 添加组件示例

### 安装插件

这里我们需要安装 Vue 组件示例插件[vitepress-theme-demoblock](https://github.com/xinlei3166/vitepress-theme-demoblock)

::: code-group

```sh [npm]
$ npm install -D vitepress-theme-demoblock
```

```sh [pnpm]
$ pnpm add -D vitepress-theme-demoblock
```

```sh [yarn]
$ yarn add -D vitepress-theme-demoblock
```

:::

### 配置

在 `.vitepress/config.mjs` 中添加如下配置：

```js
import { demoblockPlugin, demoblockVitePlugin } from "vitepress-theme-demoblock"

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
  },

  // ...
})
```

在 `.vitepress/theme/index.js` 中添加如下配置：

```js
import DefaultTheme from "vitepress/theme"
import "vitepress-theme-demoblock/dist/theme/styles/index.css"
import { useComponents } from "./useComponents"

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
  },
}
```

在 `package.json` 中添加如下命令，`vitepress-rc` 用来注册组件（ `--docsDir` 指定 docs 目录，`--componentsDir` 指定组件注册目录，如果 .vitepress 目录和 package.json 同级，--docsDir 设置为 `.` ）。

```json
{
  // ...
  "scripts": {
    // ...
    "register:components": "vitepress-rc"
  }
  // ...
}
```

在启动或构建前，先执行 `npm run register:components` 命令，会自动将 `.vitepress/components` 目录下的组件注册到 `.vitepress/theme/useComponents.js` 中。当然，您也可以手动将该命令添加到其它命令中一并执行，这样更方便。

:::demo

```vue
<template>
  <demo-button></demo-button>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success" @click="open('success')">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>

<script setup>
import { ref } from "vue"
import { ElMessage } from "element-plus"

const open = () => {
  ElMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  })
}
</script>
```

:::
