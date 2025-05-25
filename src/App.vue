<template>
    <div :class="`flex ${themeStore.current} text-ctp-subtext0 bg-ctp-base`">
        <div>
            <SideNavigation/>
        </div>
        <div class="mt-8">
            <router-view/>  
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useThemeSelector } from '@/store'

const themeStore = useThemeSelector()

onMounted(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateCurrentTheme = (theme) => {
        if (themeStore.system) {
            themeStore.current = theme.matches ? 'macchiato' : 'latte'
        }
    }

    // will run function even if on manual, but get ignored due to the check in said function
    updateCurrentTheme(themeQuery)
    themeQuery.addEventListener('change', updateCurrentTheme)
})
</script>

<script>
import SideNavigation from "@/components/SideNavigation.vue";

export default {
    name: "App",
    components: {
        SideNavigation,
    },
}
</script>
