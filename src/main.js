import Vue from 'vue'
import App from './App.vue'
import 'a17t'
import './assets/tailwind.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
