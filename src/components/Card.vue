<template>
    <a :href="href">
        <div :class="classList.join(' ')">
            <slot></slot>
        </div>
    </a>
</template>
<style scoped>
    a {
        text-decoration: none;
    }
</style>
<script>
export default {
    data() {
        return {
            classList: ['card', 'shadow-md', 'hover:shadow-xl', 'max-w-xs']
        }
    },
    props: {
        href: {
            required: false,
            type: String
        },
        justify: {
            required: false,
            type: Boolean
        }
    },
    mounted() {
        if (this.justify) {
            this.classList.push('text-justify')
        }
    }
}
</script>