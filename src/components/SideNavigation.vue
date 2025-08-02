<template>
    <span class="md:hidden sticky cursor-pointer z-50" v-on:click="toggleMobileMenu"><SlashIcon class="size-16 text-ctp-blue"/></span>
    <nav :class="`${displayIfMobileMenuEnabled} md:sticky md:block mr-8 h-screen w-48 px-8 pt-8 bg-ctp-crust text-ctp-overlay1`">
        <ul class="font-bold">
            <li><router-link to="/">about me</router-link></li>
            <li><router-link to="/contact">contact</router-link></li>
        </ul>
        <ThemeSelector class="items-end mt-auto mb-8"/>
    </nav>
</template>

<script setup>
import { ref, computed } from 'vue'

let mobileMenuOpen = ref(false)

const toggleMobileMenu = function() {
    mobileMenuOpen.value = !mobileMenuOpen.value
}

const displayIfMobileMenuEnabled = computed(() => {
    return (mobileMenuOpen.value ? 'flex flex-col' : 'sm:hidden')
})

</script>

<script>
import ThemeSelector from '@/components/ThemeSelector.vue'
import { SlashIcon } from '@heroicons/vue/16/solid'

export default {
    components: {
        ThemeSelector, SlashIcon
    }
}

</script>
