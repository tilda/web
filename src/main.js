import Vue from 'vue'
import App from './App.vue'
import 'a17t'
import './assets/tailwind.css'
import router from './router'
import Unicon from 'vue-unicons'
import { uniSun, uniMoon } from 'vue-unicons/src/icons'
import KonamiCode from 'vue-konami-code'
import Toast from 'vue-toastification'
import './assets/toastification.css'

Unicon.add([uniSun, uniMoon])
Vue.use(Unicon)

Vue.use(KonamiCode, {
  callback: function() {
    // error.mdl
    document.body.classList.add('funny')
  }
})

Vue.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 5,
  newestOnTop: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
