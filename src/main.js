import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'a17t'
import { uniSun, uniMoon } from 'vue-unicons/src/icons'
import Unicon from 'vue-unicons'
import store from './store'
import 'roboto-mono-webfont'

Unicon.add([uniSun, uniMoon])

Vue.use(Unicon)

Vue.config.productionTip = false
Vue.prototype.$bodyElement = null // It's not really a body element it's a div but idc

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
