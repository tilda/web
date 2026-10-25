<template>
    <a class="inline-flex flex-row gap-4 pb-2" :href="url" :title="icon.title" target="_blank" til-contact-method>
        <svg role="presentation" class="h-8 w-8 p-1" viewBox="0 0 24 24" :style=" { 'background-color': `#${icon.hex}` }" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path :d="icon.path"/>
        </svg>
        <span>{{ icon.title }}</span>
    </a>
</template>

<style scoped>
    a[til-contact-method]:hover::after {
        content: "→";
    }
</style>

<script setup>
const props = defineProps({
    icon: {
        type: Object, // not the best but its ok
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
})
</script>
