<template>
    <span class="md:hidden sticky cursor-pointer z-999" v-on:click="toggleMobileMenu"><SlashIcon class="size-16 text-ctp-blue"/></span>
</template>

<style scoped>
.z-999 {
    z-index: 999;
}
</style>

<script setup>
import { useNavToggle } from '@/store'
import { SlashIcon } from '@heroicons/vue/16/solid'

const navToggle = useNavToggle()
const toggleMobileMenu = () => {
    navToggle.open = !navToggle.open
}
</script>
