<template>
    <div :class="`flex ${themeStore.current} text-ctp-text bg-ctp-base h-screen`">
        <nav>
            <MobileMenu/>
            <SideNavigation/>
        </nav>
        <main class="mt-8">
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
import { onMounted } from 'vue'
import { useThemeSelector } from '@/store'
import SideNavigation from '@/components/SideNavigation.vue'
import MobileMenu from './components/MobileMenu.vue'

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
