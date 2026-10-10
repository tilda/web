import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/theming.css'
import GhostContentAPI from '@tryghost/content-api'
import { pinia } from './store/index.js'

const ghost = new GhostContentAPI({
    url: import.meta.env.VITE_GHOST_URL,
    key: import.meta.env.VITE_GHOST_CONTENT_KEY,
    version: import.meta.env.VITE_GHOST_VERSION,
})

const app = createApp(App)
    .use(pinia)
    .use(router)
    .provide('cms', ghost)
    .mount('#app')
