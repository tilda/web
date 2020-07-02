<template>
    <a @click="switchTheme" class="switcher align-baseline">
        <unicon v-if="this.$store.state.dark" name="sun" fill="white" aria-label="Switch to light mode"/>
        <unicon v-else name="moon" fill="black" aria-label="Switch to dark mode"/>
    </a>
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