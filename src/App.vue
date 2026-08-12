<template>
    <div class="flex h-screen max-w-screen">
        <SideNavigation />
        <div class="md:mr-56"></div> <!-- I really don't like this, but that's okay -->
        <main class="flex-1 md:max-w-3/5 md:mr-4 pt-8 md:pl-8 mx-4 md:mx-0 mt-8 md:mt-0 mb-4">
            <div v-if="currentRoute.meta.heading" class="border-2 border-ctp-overlay0 p-4 mb-4">
                <h1 v-if="currentRoute.meta.heading">{{ currentRoute.meta.heading }}</h1>
                <span class="italic text-sm" v-if="currentRoute.meta.subheading">
                    {{ currentRoute.meta.subheading }}
                </span>
                <div v-if="currentRoute.meta.wip" class="border-2 border-ctp-overlay0 bg-ctp-yellow/25 p-4 mt-2">
                    <span>this page is currently work-in-progress. you may want to check back later!</span>
                </div>
            </div>
            <router-view class="leading-8 text-justify mt-revert" />
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
import { useRoute } from 'vue-router'
import SideNavigation from '@/components/SideNavigation.vue'
import { useThemeSelector } from '@/store'

const themeStore = useThemeSelector()
const currentRoute = useRoute()
const applyTheme = (theme) => {
    document.body.className = `${theme} text-ctp-text bg-ctp-base`
}

onMounted(() => {
    applyTheme(themeStore.current)

    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateThemeStore = (theme) => {
        if (themeStore.system) {
            themeStore.current = theme.matches ? 'macchiato' : 'latte'
        }
    }

    updateThemeStore(themeQuery) // runs regardless of setting, but ignored if not system theme
    themeQuery.addEventListener('change', updateThemeStore)
})

watch(
    () => themeStore.current,
    (newTheme) => {
        applyTheme(newTheme)
    },
)
</script>
