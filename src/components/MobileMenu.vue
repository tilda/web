<template>
    <span class="md:hidden sticky cursor-pointer z-99" v-on:click="toggleMobileMenu"><SlashIcon class="size-12 text-ctp-blue"/></span>
</template>

<script setup>
import { useNavToggle } from '@/store'
import { SlashIcon } from '@heroicons/vue/16/solid'

const navToggle = useNavToggle()
const toggleMobileMenu = () => {
    navToggle.open = !navToggle.open
}
</script>
