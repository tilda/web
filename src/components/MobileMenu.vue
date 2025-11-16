<template>
    <span class="md:hidden sticky z-99"><SlashIcon v-on:click="toggleMobileMenu" class="size-12 text-ctp-blue cursor-pointer"/></span>
</template>

<script setup>
import { useNavToggle } from '@/store'
import { SlashIcon } from '@heroicons/vue/16/solid'

const navToggle = useNavToggle()
const toggleMobileMenu = () => {
    navToggle.open = !navToggle.open
}
</script>
