<template>
    <h2 :class="classList.join(' ')">
        <slot></slot>
    </h2>
</template>
<style scoped>
    .text-sm {
        font-size: 0.875rem !important;
    }
</style>
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
        },
        bold: {
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

        if (!this.bold) {
            // By sheer luck, the subheading class enforces bold font,
            // so we can get away with just 1 branch on this
            this.classList.push('font-normal')
        }
    }
}
</script>