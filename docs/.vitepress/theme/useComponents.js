// Don't remove this file, because it registers the demo components.
import DemoButton from '../components/demo-button.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export function useComponents(app) {
  app.component('DemoButton', DemoButton)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
