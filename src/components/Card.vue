<template>
    <a :href="href">
        <div class="card shadow-md hover:shadow-xl max-w-xs max-h-4 float-left">
            <slot></slot>
        </div>
    </a>
</template>
<style>
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