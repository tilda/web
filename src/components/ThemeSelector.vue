<template>
    <div>
        <!-- TODO: accomodate keyboard accessibility better i really dont like this? -->
        <button
            type="button"
            :aria-readonly="themeStore.system"
            :title="`Current theme: ${themeStore.current} ${themeStore.system ? '(system theming)' : ''}`"
            :tabindex="themeStore.system ? '-1' : '0'"
            :class="`size-6 inline-block ${themeStore.system ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`">
            <MoonIcon
                v-if="themeStore.current === 'macchiato'"
                @click="themeStore.setLight"
                @keyup.enter="themeStore.setLight" />
            <SunIcon
                v-else-if="themeStore.current === 'latte'"
                @click="themeStore.setDark"
                @keyup.enter="themeStore.setDark" />
        </button>
        <button
            type="button"
            tabindex="0"
            class="text-xs italic block cursor-pointer"
            @click="themeStore.toggleSystem"
            @keyup.enter="themeStore.toggleSystem">
            (<span>{{ themeStore.system ? 'using' : 'overriding' }}</span>
            your system theme)
        </button>
    </div>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/16/solid'
import { useThemeSelector } from '@/store'

const themeStore = useThemeSelector()
</script>
