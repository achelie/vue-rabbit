import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueLazyload from 'vue-lazyload'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
// 导入component全局配置
import { componentPlugin } from './components'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(VueLazyload)
app.use(componentPlugin)

app.mount('#app')
