# VitePress 入门教程

VitePress 是一个旨在构建快速、以内容为中心的网站的静态站点生成器（SSG）。它接收以 Markdown 编写的源内容，并应用主题，生成静态 HTML 页面，可轻松部署到任何位置。

简而言之，通过 VitePress，您可以使用 Markdown 编写您的内容，然后使用该工具将其转换为具有优雅主题的静态网页。这使得您能够轻松地创建和展示内容丰富的网站，而无需处理动态服务器或数据库。生成的静态 HTML 页面可以在各种主机环境上进行部署，为用户提供快速且高效的浏览体验。VitePress 的设计目标是简单易用，同时提供出色的性能。它利用 Vite 构建工具的优势，借助现代前端开发技术和工作流程，实现了快速的开发和热重载功能。

总之，VitePress 是一个功能强大的工具，使您能够以 Markdown 格式创作内容，并将其转换为漂亮的静态网页，为用户提供出色的浏览体验。无论是个人博客、文档站点还是任何其他类型的内容展示，VitePress 都是一个强大而灵活的选择。

## 安装

### 先前准备

- 安装 [Node.js](https://nodejs.org/) <Badge type="tip" text="版本不低于18" />
- 安装支持 Markdown 语法的文本编辑器，推荐使用[VSCode](https://code.visualstudio.com/)

无论是单独使用 VitePress，还是将其安装到现有项目中，您都可以使用以下命令来安装 VitePress：

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
VitePress 仅支持 ESM 模块规范，因此安装完成后请在 `package.json` 中补充 `"type": "module"` 。当然，您也可以访问[官方教程及说明](https://vitepress.dev/guide/getting-started)，了解更多的方式。
:::

### 初始化向导

安装 VitePress 后，您可以使用附带的命令行设置向导来帮助您建立基本项目结构。通过运行以下命令，您可以启动该向导：

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

运行上述命令后，VitePress 将提示您回答几个问题，以配置和创建基础项目结构。您可以根据自己的需求进行选择和设置，设置向导将根据您的回答生成必要的文件和目录，包括配置文件、主题文件、示例内容等。这样，您就可以在此基础上开始编写您自己的内容，并根据需要进行进一步的自定义和配置。

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

在 VitePress 中，`docs` 目录被视为项目的根目录，其中包含了站点的内容和文档。这意味着您可以在 docs 目录下组织和编写您的 Markdown 文件，每个文件对应一个页面或文档。

另外，`.vitepress` 目录是 VitePress 的特殊目录，用于存放配置文件、开发服务器缓存、构建输出以及可选主题自定义代码等内容。您可以在该目录下找到或自建以下文件和文件夹：

- `config.js`：VitePress 的配置文件，您可以在此文件中定义站点的配置选项，如导航栏、侧边栏、插件等。
- `theme` 文件夹：如果您需要对主题进行自定义，您可以在此文件夹中添加自定义的主题代码。这样可以覆盖默认主题的样式和行为。
- `cache` 文件夹：用于 VitePress 开发服务器的缓存文件，以加快开发过程中的重新构建速度。
- `dist` 文件夹：在运行构建命令后，生成的静态网站文件将输出到这个文件夹中。

通过使用 .vitepress 目录，您可以对站点进行高度定制，包括修改主题样式、配置站点元数据、添加插件等。这个目录在 VitePress 中具有特殊的意义，它提供了扩展和自定义的能力，以满足您的特定需求。

## 定制

VitePress 默认以 `index.md` 作为站点的主页，而 `./vitepress/config.mjs` 会作为全局配置文件，您可以利用它们来个性化定制自己的站点。

### 主页

```md
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: VitePress入门教程
  text: 加油，年轻人
  tagline: 不积跬步，无以至千里
  image:
    src: /LOGO.png
  actions:
    - theme: brand
      text: Markdown Extensions
      link: /markdown-examples
    - theme: alt
      text: Runtime API
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

假设您的其它 Vue 项目是部署在服务器 `/` 根路径下的，您准备将 VitePress 部署到 `/docs` 路径下，那么您需要在 config.mjs 中配置 `base` 为 `/docs/`。同样地，配置标签页的图标时，您也需要在 `head` 选项中 `href` 属性前添加 base 的路径。需要注意的是，您可以在 docs 目录下新建 `public` 目录，因为 VitePress 与 Vue 项目一致，项目构建时默认会将 public 目录下的静态资源移至项目根路径。

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

VitePress 的主题配置项提供了许多选项，您可以选择性地展示您想要的内容。通过合理配置这些选项，您可以根据自己的需求和设计风格，打造出独特而具有吸引力的站点。

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

VitePress 支持使用浏览器内索引进行模糊全文搜索，这是通过[minisearch](https://github.com/lucaong/minisearch/)实现的。要启用此功能，您可以将 `themeConfig.search.provider` 选项设置为 `'local'` ：

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

设置为 `'local'` 后，VitePress 将使用浏览器内索引进行搜索。它会在构建时生成一个索引文件，然后在用户访问站点时，将索引加载到浏览器中进行搜索。此外，如果您希望更强大和高级的搜索功能，VitePress 还支持集成第三方搜索服务 [Algolia](https://www.algolia.com/)。Algolia 是一个流行的搜索服务提供商，可以提供更准确和高级的搜索结果。

#### 导航菜单

VitePress 提供了多种方式来设置导航菜单项，以满足不同的需求。您可以使用这些方式来创建多级菜单、可分组的菜单项以及外链。

<details>
<summary>点击显示/折叠代码</summary>

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

</details>

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

要使用 `docs:dev` 脚本启动具有即时热更新的本地开发服务器，您可以运行以下命令：

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
迫不及待地想尝试？推荐您访问[VitePress 官网](https://vitepress.dev/)获取更多详细信息和资源。官网提供了关于 VitePress 的完整文档、指南和参考，以及示例代码和演示站点，可以帮助您更好地了解 VitePress 的功能和特性，学习如何创建漂亮的文档站点，并发掘 VitePress 提供的快速开发体验。祝您在使用 VitePress 进行静态站点生成时取得成功！
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

希望在文档中添加 Vue 组件示例，您可以考虑安装[vitepress-theme-demoblock](https://github.com/xinlei3166/vitepress-theme-demoblock)。

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
