import { defineStore } from 'pinia'

const getSystemDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)') // -> true if system is dark
}

const returnTargetTheme = (query) => {
    return (query ? 'macchiato' : 'latte')
}

export const useThemeSelector = defineStore('theme', {
    state: () => ({ system: true, current: '' }),
    actions: {
        toggleSystem() {
            this.system = !this.system
            if (this.system) {
                this.current = returnTargetTheme(getSystemDarkMode())
            } else if (this.current == 'macchiato') {
                this.setLight()
            } else if (this.current == 'latte') {
                this.setDark()
            }
        },
        setLight() {
            this.current = 'latte'
        },
        setDark() {
            this.current = 'macchiato'
        }
    }
})