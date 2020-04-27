<template>
    <p class="rainbow">{{ text }}</p>
</template>

<style scoped>
    @import "~roboto-mono-webfont/roboto-mono.min.css";
    .rainbow {
        font: 'Roboto Mono';
        background: linear-gradient(to right, #11998E 0%, #38ef7d 100%);
        animation: rainbow 5s ease infinite;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    /* Shamelessly stolen from a random codepen, but I don't think they would care. */
    @keyframes rainbow { 
        from { filter: hue-rotate(0deg); }
        to { filter: hue-rotate(-360deg); }
    }
</style>

<script>
export default {
    props: {
        "text": String
    }
}
</script>