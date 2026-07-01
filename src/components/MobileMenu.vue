<template>
    <span class="md:hidden sticky z-99">
        <Bars2Icon @click="toggleMobileMenu" class="size-12 text-ctp-blue cursor-pointer pr-4" />
    </span>
</template>

<script setup>
import { Bars2Icon } from '@heroicons/vue/16/solid'
import { useNavToggle } from '@/store'

const navToggle = useNavToggle()
const toggleMobileMenu = () => {
    navToggle.open = !navToggle.open
}
</script>
