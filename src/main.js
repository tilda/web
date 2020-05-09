import Vue from 'vue'
import App from './App.vue'
import 'a17t'
import './assets/tailwind.css'
import router from './router'
import Unicon from 'vue-unicons'
import { uniSun, uniMoon } from 'vue-unicons/src/icons'

Unicon.add([uniSun, uniMoon])
Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
