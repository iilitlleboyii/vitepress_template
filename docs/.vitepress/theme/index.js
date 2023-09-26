import DefaultTheme from "vitepress/theme"
import "./styles/vars.css"
import "vitepress-theme-demoblock/dist/theme/styles/index.css"
import { useComponents } from "./useComponents"
import 'element-plus/dist/index.css'
import ElementPlus from "element-plus"
import zhCn from "element-plus/dist/locale/zh-cn.mjs"

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    ctx.app.use(ElementPlus, {
      locale: zhCn,
    })
  },
}
