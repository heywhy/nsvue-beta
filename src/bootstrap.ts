import { App, NSVElement } from 'nativescript-vue'
import { createPinia } from 'pinia'

export const installPlugins = (app: App<NSVElement>) => {
  app.use(createPinia())
}
