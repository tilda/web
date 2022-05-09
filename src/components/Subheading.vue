<template>
    <h2 :class="classList.join(' ')">
        <slot></slot>
    </h2>
</template>
<script>
export default {
    data() {
        return {
            classList: ['subheading']
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
            this.classList.push('text-sm')
        } else {
            this.classList.push('text-xl')
        }
    }
}
</script>