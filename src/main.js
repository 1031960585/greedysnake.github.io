import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'

import { reactive } from "vue";

const app = createApp(App).use(store).use(router).use(ElementPlus)
app.config.globalProperties.$foods = reactive([])
app.config.globalProperties.$snakes = reactive([])

app.mount('#app')