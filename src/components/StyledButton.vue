<template>
    <button type="button" :disabled="disabled"
        :class="`border px-1 underline ${disabled ? 'cursor-not-allowed text-ctp-subtext0/50' : 'cursor-pointer'}`">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>
