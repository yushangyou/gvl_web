/*
 * @Author: yushangyou
 * @Date: 2023-09-09 16:08:37
 * @LastEditTime: 2023-09-09 18:12:36
 * @email: yushangyou2020@163.com
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import './assets/theme.css'
import '@/assets/admin.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ArcoVue)
app.use(router)

app.mount('#app')
