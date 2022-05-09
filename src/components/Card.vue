<template>
    <a :href="href" class="sm:max-w-lg md:max-w-md">
        <span :class="classList.join(' ')">
            <slot></slot>
        </span>
    </a>
</template>
<style scoped>
    a {
        text-decoration: none;
    }
    .md\:min-h-40 {
        min-height: 160px !important;
    }
</style>
<script>
export default {
    data() {
        return {
            classList: ['card', 'shadow-md', 'hover:shadow-xl']
        }
    },
    props: {
        href: {
            required: false,
            type: String
        },
        left: {
            required: false,
            type: Boolean
        },
    },
    mounted() {
        if (this.left) {
            this.classList.push('text-left')
        }
    }
}
</script>