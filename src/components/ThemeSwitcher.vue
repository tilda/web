<template>
    <span @click="switchTheme" class="switcher align-baseline" tabindex="0">
        <unicon v-if="this.$store.state.dark" name="sun" fill="white" aria-label="Switch to light mode"/>
        <unicon v-else name="moon" fill="black" aria-label="Switch to dark mode"/>
    </span>
</template>

<script>
export default {
    methods: {
        switchTheme() {
            this.$store.commit('switchTheme')
        }
    }
}
</script>