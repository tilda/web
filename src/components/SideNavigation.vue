<template>
    <span class="md:hidden sticky cursor-pointer z-50"><SlashIcon class="size-16 text-blue"/></span>
    <nav class="sm:hidden md:flex flex-col sticky mr-8 h-screen w-48 px-8 pt-8 bg-ctp-crust">
        <h1>IT ME!!!!</h1>
        <ul class="font-bold text-blue">
            <li><router-link to="/">about me</router-link></li>
            <li><router-link to="/contact">contact</router-link></li>
        </ul>
        <ThemeSelector class="items-end mt-auto mb-8"/>
    </nav>
</template>

<script>
import ThemeSelector from '@/components/ThemeSelector.vue'
import { SlashIcon } from '@heroicons/vue/16/solid'

export default {
    components: {
        ThemeSelector, SlashIcon
    }
}

</script>
