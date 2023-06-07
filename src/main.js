import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from './router'
// 导入component全局配置
import { componentPlugin } from './components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyload)
app.use(componentPlugin)

app.mount('#app')
