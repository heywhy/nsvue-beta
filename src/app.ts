import { createApp } from 'nativescript-vue'
import { installPlugins } from './bootstrap'
import Home from './components/Home.vue'

const app = createApp(Home)

installPlugins(app)

app.start()
