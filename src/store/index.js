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
      if (window.matchMedia('(prefers-reduced-motion: reduce').matches) {
        return document.body.classList.replace((state.dark ? 'light' : 'dark'), (state.dark ? 'dark' : 'light'))
      }

      let transitionClass = (state.dark ? 'light-to-dark' : 'dark-to-light')
      document.body.classList.add(transitionClass)
      document.body.classList.remove((state.dark ? 'light': 'dark'))
      setTimeout(() => {
        document.body.classList.add((state.dark ? 'dark': 'light'))
        document.body.classList.remove(transitionClass)
      }, 600)
    }
  },
  actions: {
  },
  modules: {
  }
})
