import { defineConfig } from "vitepress"
import { demoblockPlugin, demoblockVitePlugin } from "vitepress-theme-demoblock"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    },
  },
  vite: {
    plugins: [demoblockVitePlugin()],
    build: {
      chunkSizeWarningLimit: 2000,
    },
  },
  base: "/docs/",
  title: "VitePress入门教程",
  titleTemplate: "VitePress模板",
  description: "快速搭建文档站点",
  head: [["link", { rel: "icon", href: "/docs/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "VitePress入门教程",
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    nav: [
      { text: "🎈VitePress入门教程", link: "/vitepress/", activeMatch: "/vitepress/" },
      { text: "⚡最新", link: "/guide/", activeMatch: "/guide/" },
      { text: "🔥最热", link: "/config/", activeMatch: "/config/" },
      { text: "🚩Vue", link: "/vue/", activeMatch: "/vue/" },
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
            text: "实践工具",
            link: "/sundry/tools/",
            activeMatch: "/sunry/tools/",
          },
          {
            text: "Vue相关",
            items: [
              {
                text: "What(未写)",
                link: "/sundry/vue/what/",
                activeMatch: "/sundry/vue/what/",
              },
              {
                text: "How(未写)",
                link: "/sundry/vue/how/",
                activeMatch: "/sundry/vue/how/",
              },
            ],
          },
          {
            text: "Node相关",
            items: [
              {
                text: "What(未写)",
                link: "/sundry/node/what/",
                activeMatch: "/sundry/node/what/",
              },
              {
                text: "How(未写)",
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
    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress", ariaLabel: "github" }],
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
      "/sundry/tools/": [
        {
          text: "实践工具",
          items: [
            {
              text: "表单验证",
              items: [
                {
                  text: "ajv",
                  link: "/sundry/tools/ajv",
                },
                {
                  text: "async-validator",
                  link: "/sundry/tools/async-validator",
                },
              ],
            },
          ],
        },
      ],
    },
    outline: {
      label: "目录",
      level: "deep",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Arcuchi Co., Ltd.",
    },
  },
})
