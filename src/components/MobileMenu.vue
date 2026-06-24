<template>
    <span class="md:hidden sticky z-99">
        <SlashIcon @click="toggleMobileMenu" class="size-12 text-ctp-blue cursor-pointer" />
    </span>
</template>

<script setup>
import { SlashIcon } from '@heroicons/vue/16/solid'
import { useNavToggle } from '@/store'

const navToggle = useNavToggle()
const toggleMobileMenu = () => {
    navToggle.open = !navToggle.open
}
</script>
