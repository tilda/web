<template>
    <div @nav-toggle="toggleMobileMenu" class="flex fixed md:sticky md:top-0 md:self-start flex-col drop-shadow-2xl justify-between mr-8 max-h-screen max-w-full w-screen md:w-auto bg-ctp-crust md:bg-transparent">
        <MobileMenu/>
        <div :class="`${displayIfMobileMenuEnabled} flex-col pt-2 md:pt-8 px-8 h-screen w-screen md:w-56 bg-ctp-crust text-ctp-overlay1`">
            <span class="text-sm text-ctp-mauve">tilda's abode</span>
            <ul class="font-bold">
                <li v-for="route in router.options.routes" :key="route.name">
                    <router-link :to="route.path">{{ route.name }} </router-link>
                    <span v-if="route.meta.wip" class="pl-2" title="work-in-progress page">⚠️</span>
                </li>
            </ul>
            <ThemeSelector class="mt-auto mb-8"/>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNavToggle } from '@/store'
import { useRouter } from 'vue-router'
import ThemeSelector from '@/components/ThemeSelector.vue'
import MobileMenu from './MobileMenu.vue'

let navToggle = useNavToggle()
const router = useRouter()

const displayIfMobileMenuEnabled = computed(() => {
    return (navToggle.open ? 'z-99' : 'hidden md:flex')
})
</script>
