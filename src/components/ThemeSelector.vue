<template>
    <div>
        <!-- TODO: accomodate keyboard accessibility better i really dont like this? -->
        <div :aria-readonly="themeStore.system" :title="`Current theme: ${themeStore.current}`" tabindex="0" :class="`size-6 inline-block ${themeStore.system ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`">
            <MoonIcon v-if="themeStore.current == 'macchiato'" @click="themeStore.setLight" @keyup.enter="themeStore.setLight"/>
            <SunIcon v-else-if="themeStore.current == 'latte'" @click="themeStore.setDark" @keyup.enter="themeStore.setDark"/>
        </div>
        <span tabindex="0" class="text-xs italic block cursor-pointer" @click="themeStore.toggleSystem" @keyup.enter="themeStore.toggleSystem">
            (using <span v-if="themeStore.system">system</span><span v-else>manual</span> theming)
        </span>
    </div>
</template>

<script setup>
import { useThemeSelector } from '@/store'

const themeStore = useThemeSelector()
</script>

<script>
import { MoonIcon, SunIcon } from '@heroicons/vue/16/solid'

export default {
    name: 'ThemeSelector',
    components: {
        MoonIcon, SunIcon
    }
}
</script>