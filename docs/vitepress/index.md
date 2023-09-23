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
    ...
    "scripts": {
        "docs:dev": "vitepress dev docs",
        "docs:build": "vitepress build docs",
        "docs:preview": "vitepress preview docs"
    },
    ...
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
