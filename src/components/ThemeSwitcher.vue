<template>
    <span @click="switchTheme" class="switcher">
        <unicon v-if="this.$store.state.dark" name="sun" fill="white"/>
        <unicon v-else name="moon" fill="black"/>
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