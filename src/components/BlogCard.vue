<template>
    <a :href="link">
        <div class="w-96 h-36 bg-">
            <div class="text-sm">{{ date }}</div>
            <h3 class="text-md">{{ title }}</h3>
            <div class="text-sm">{{ description }}</div>
        </div>
    </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['title', 'description', 'link', 'date'])
</script>