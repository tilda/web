<template>
    <div class="inline-flex md:block">
        <!-- TODO: accomodate keyboard accessibility better i really dont like this? -->
        <button type="button" :aria-readonly="themeStore.system"
            :title="`Current theme: ${themeStore.current} ${themeStore.system ? '(system theming)' : ''}`"
            :tabindex="themeStore.system ? '-1' : '0'"
            :class="`size-12 md:size-6 pr-4 md:pr-0 inline-block ${themeStore.system ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`">
            <MoonIcon v-if="themeStore.current === 'macchiato'" @click="themeStore.setLight"
                @keyup.enter="themeStore.setLight" />
            <SunIcon v-else-if="themeStore.current === 'latte'" @click="themeStore.setDark"
                @keyup.enter="themeStore.setDark" />
        </button>
        <button type="button" tabindex="0" class="text-sm md:text-xs italic block cursor-pointer"
            @click="themeStore.toggleSystem">
            (<span>{{ themeStore.system ? 'using' : 'overriding' }}</span>
            system theming)
        </button>
    </div>
</template>

<script setup>
import { MoonIcon, SunIcon } from '@heroicons/vue/16/solid'
import { useThemeSelector } from '@/store'

const themeStore = useThemeSelector()
</script>
