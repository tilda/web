<template>
    <div>
        <div :class="`size-6 inline-block ${themeStore.system ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`">
            <MoonIcon v-if="themeStore.current == 'macchiato'" v-on:click="themeStore.setLight"/>
            <SunIcon v-else-if="themeStore.current == 'latte'" v-on:click="themeStore.setDark"/>
        </div>
        <span class="text-xs italic block cursor-pointer" v-on:click="themeStore.toggleSystem">
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