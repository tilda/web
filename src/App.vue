<template>
    <div :class="`${themeStore.current} flex h-screen max-w-screen`">
        <SideNavigation/>
        <main class="pt-8 md:max-w-3/5 mx-2 md:mx-0 mt-8 md:mt-0">
            <router-view/>  
        </main>
    </div>
</template>

<style>
/* doesn't work in SideNavigation itself but works here
 * i simply will not question it
 */

@keyframes anim-vertical-slide {
    from {
        transform: translateX(-200%);
        opacity: 0%;
    }
    to {
        transform: translateX(0%);
        opacity: 100%;
    }
}

div a.router-link-exact-active {
    text-decoration: solid underline;
}
div a.router-link-exact-active::before {
    display: inline-block;
    content: "↗";
    animation: 0.3s ease-out anim-vertical-slide;
    padding-right: 8px;
}
</style>

<script setup>
import { onMounted, watch } from 'vue'
import { useThemeSelector } from '@/store'
import SideNavigation from '@/components/SideNavigation.vue'

const themeStore = useThemeSelector()

onMounted(() => {
    applyTheme(themeStore.current)
    
    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateCurrentTheme = (theme) => {
        if (themeStore.system) {
            themeStore.current = theme.matches ? 'macchiato' : 'latte'
        }
    }

    updateCurrentTheme(themeQuery) // runs regardless of setting, but ignored if not system theme
    themeQuery.addEventListener('change', updateCurrentTheme)
})

const applyTheme = (theme) => { document.body.className = `${theme} text-ctp-text bg-ctp-base` }
watch(() => themeStore.current, (newTheme) => {
    applyTheme(newTheme)
})
</script>
