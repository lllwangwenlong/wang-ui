import { createApp } from 'vue'
import App from './App.vue'
import WUI from './packages/index'

const app = createApp(App)
app.use(WUI)
app.mount('#app')
