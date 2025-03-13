import './devtools'

import LottieView from '@nativescript-community/ui-lottie/vue'
import { Anchored, Content, Header, ParallaxView } from '@nativescript-community/ui-parallax'
import { createApp, registerElement } from 'nativescript-vue'
import Home from './components/Home.vue'
import { sy } from './shared'
import { installPlugins } from './bootstrap'

const app = createApp(Home)

app.provide(sy, 'from:milker')

app.use(LottieView)

registerElement('ParallaxAnchored', () => Anchored)
registerElement('ParallaxContent', () => Content)
registerElement('ParallaxHeader', () => Header)
registerElement('ParallaxView', () => ParallaxView)

installPlugins(app)

app.start()
