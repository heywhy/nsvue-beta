import { createApp } from 'nativescript-vue'
import { createPinia } from 'pinia'
import Home from './components/Home.vue'

const pinia = createPinia()
const app = createApp(Home)

app.use(pinia)

app.start()
