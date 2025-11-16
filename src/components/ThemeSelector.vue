<template>
    <div>
        <!-- TODO: accomodate keyboard accessibility better i really dont like this? -->
        <div role="button" :aria-readonly="themeStore.system" :title="`Current theme: ${themeStore.current}`" tabindex="0" :class="`size-6 inline-block ${themeStore.system ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`">
            <MoonIcon v-if="themeStore.current == 'macchiato'" @click="themeStore.setLight" @keyup.enter="themeStore.setLight"/>
            <SunIcon v-else-if="themeStore.current == 'latte'" @click="themeStore.setDark" @keyup.enter="themeStore.setDark"/>
        </div>
        <span tabindex="0" class="text-xs italic block cursor-pointer" @click="themeStore.toggleSystem" @keyup.enter="themeStore.toggleSystem">
            (<span v-if="themeStore.system">using</span><span v-else>overriding</span> your system theme)
        </span>
    </div>
</template>

<script setup>
import { useThemeSelector } from '@/store'
import { MoonIcon, SunIcon } from '@heroicons/vue/16/solid'

const themeStore = useThemeSelector()
</script>