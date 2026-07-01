import { createPinia, defineStore } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const returnTargetTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'macchiato'
        : 'latte'
}

export const useThemeSelector = defineStore('theme', {
    state: () => ({ system: true, current: '' }),
    actions: {
        toggleSystem() {
            this.system = !this.system
            if (this.system) {
                this.current = returnTargetTheme()
            } else if (this.current === 'macchiato') {
                this.setLight()
            } else if (this.current === 'latte') {
                this.setDark()
            }
        },
        setLight() {
            if (!this.system) {
                this.current = 'latte'
            }
        },
        setDark() {
            if (!this.system) {
                this.current = 'macchiato'
            }
        },
    },
    persist: true,
})

export const useNavToggle = defineStore('navToggle', {
    state: () => ({ open: false }),
    actions: {
        toggle() {
            this.open = !this.open
        },
    },
})
