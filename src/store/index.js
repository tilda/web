import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const persist = new VuexPersist({
  key: 'state',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    persist.plugin
  ],
  state: {
    dark: true
  },
  mutations: {
    switchTheme(state) {
      state.dark = !state.dark
      if (state.dark === false) {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
      } else {
        document.body.classList.remove('light')
        document.body.classList.add('dark')
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
