import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import 'a17t'
import { uniSun, uniMoon } from 'vue-unicons/src/icons'
import Unicon from 'vue-unicons'

Unicon.add([uniSun, uniMoon])

Vue.use(Unicon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
