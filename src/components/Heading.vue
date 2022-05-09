<template>
    <h1 :class="classList">
        <slot></slot>
    </h1>
</template>

<script>
export default {
    data() {
        return {
            classList: 'heading '
        }
    },
    props: {
        small: {
            required: false,
            type: Boolean
        }
    },
    mounted() {
        if (this.small) {
            this.classList += 'text-xl'
        } else {
            this.classList += 'text-3xl'
        }
    }
}
</script>