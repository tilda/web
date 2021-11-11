<template>
    <a :href="href">
        <div class="card shadow-md hover:shadow-xl max-w-xs max-h-4">
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
    props: {
        href: {
            required: false,
            type: String
        }
    }
}
</script>