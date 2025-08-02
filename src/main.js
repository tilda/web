import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theming.css'
import { pinia } from './store/index.js'

createApp(App).use(pinia).use(router).mount('#app')
