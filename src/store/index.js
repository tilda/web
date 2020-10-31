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
    dark: window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  mutations: {
    switchTheme(state) {
      state.dark = !state.dark
      document.body.classList.remove((state.dark ? 'light' : 'dark'))
      document.body.classList.add((state.dark ? 'dark' : 'light'))
    }
  },
  actions: {
  },
  modules: {
  }
})
