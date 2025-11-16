<template>
    <div @nav-toggle="toggleMobileMenu" class="flex fixed md:sticky flex-col drop-shadow-2xl justify-between mr-8 max-h-screen max-w-full w-screen md:w-auto bg-ctp-crust md:bg-transparent">
        <MobileMenu/>
        <nav :class="`${displayIfMobileMenuEnabled} flex-col pt-2 md:pt-8 px-8 h-screen w-screen md:w-48 bg-ctp-crust text-ctp-overlay1`">
            <span class="text-sm text-ctp-mauve">tilda's abode</span>
            <ul class="font-bold">
                <li><router-link to="/">about me</router-link></li>
                <li><router-link to="/contact">contact</router-link></li>
            </ul>
            <ThemeSelector class="mt-auto mb-8"/>
        </nav>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNavToggle } from '@/store'
import ThemeSelector from '@/components/ThemeSelector.vue'
import MobileMenu from './MobileMenu.vue'

let navToggle = useNavToggle()

const displayIfMobileMenuEnabled = computed(() => {
    return (navToggle.open ? 'z-99' : 'hidden md:flex')
})

</script>
