<template>
    <nav
        @nav-toggle="toggleMobileMenu"
        class="flex fixed md:top-0 md:self-start flex-col justify-between mr-8 max-h-screen max-w-full w-screen md:w-auto backdrop-blur-sm">
        <div :class="`inline-flex items-center ${navToggle.open ? 'bg-ctp-crust/50' : 'bg-ctp-crust'} min-h-12`">
            <router-link to="/" class="text-sm bg-ctp-mauve text-ctp-base md:mt-8 ml-4 md:ml-8 p-1 no-nav-arrow no-decoration">
                tilda's abode
            </router-link>
            <span class="mx-auto md:mx-0"></span>
            <MobileMenu />
        </div>
        <div
            :class="`${displayIfMobileMenuEnabled} flex flex-col pt-8 md:pt-4 px-8 h-screen w-screen md:w-56 bg-ctp-crust/50 md:bg-ctp-crust text-ctp-text`">
            <ul class="font-bold text-4xl md:text-base">
                <li class="pb-4 md:pb-0" v-for="route in router.options.routes" :key="route.name">
                    <router-link :to="route.path">{{ route.name }} </router-link>
                    <span v-if="route.meta.wip" class="pl-2" title="(work-in-progress page)">⚠️</span>
                </li>
            </ul>
            <ThemeSelector class="mt-auto mb-8" />
        </div>
    </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import MobileMenu from '@/components/MobileMenu.vue'
import ThemeSelector from '@/components/ThemeSelector.vue'
import { useNavToggle } from '@/store'

let navToggle = useNavToggle()
const router = useRouter()

const displayIfMobileMenuEnabled = computed(() => {
    return navToggle.open ? 'z-99' : 'hidden md:flex'
})
</script>
