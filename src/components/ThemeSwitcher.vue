<template>
    <span v-on:click="">
        <unicon v-if="dark" name="sun" fill="white"/>
        <unicon v-else name="moon" fill="black"/>
    </span>
</template>

<script>
export default {
    data() {
        return {
            dark: true
        }
    },
    mounted() {
        if (localStorage.getItem('dark') === null) {
            localStorage.setItem('dark', true)
        } else {
            this.dark = localStorage.getItem('dark')
        }
    },
    methods: {
        switchColorScheme(): function() {
            // hold on
        }
    }
}
</script>