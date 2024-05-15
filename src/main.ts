import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'
import tmui from './tmui'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = Pinia.createPinia()
  app.use(pinia)
  app.use(tmui, {} as Tmui.tmuiConfig)
  return {
    app,
    Pinia,
  }
}
