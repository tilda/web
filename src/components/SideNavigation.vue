<template>
    <div @nav-toggle="toggleMobileMenu" :class="`${displayIfMobileMenuEnabled} md:sticky flex flex-col drop-shadow-2xl justify-between mr-8 h-screen w-48 px-8 pt-8 bg-ctp-crust text-ctp-overlay1`">
        <ul class="font-bold">
            <li><router-link to="/">about me</router-link></li>
            <li><router-link to="/contact">contact</router-link></li>
        </ul>
        <ThemeSelector class="mt-auto mb-8"/>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNavToggle } from '@/store'
import ThemeSelector from '@/components/ThemeSelector.vue'

let navToggle = useNavToggle()

const displayIfMobileMenuEnabled = computed(() => {
    return (navToggle.open ? '' : 'hidden')
})

</script>
