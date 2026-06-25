<template>
    <div>
        <!-- biome-ignore lint/a11y/useValidAnchor: biomejs/biome#10661 -->
        <h1 v-if="link"><a :href="link">{{ name }}</a></h1>
        <h1 v-else>{{ name }}</h1>
        <div class="flex flex-row text-sm mt-2">
            <span>{{ formatList(skills) }}</span>
            <span class="mx-auto"></span>
            <span class="font-bold">{{ date }}</span>
        </div>
        <p v-html="renderMarkdown(description)"></p>
    </div>
</template>

<script setup>
import MarkdownIt from 'markdown-it'

const md = MarkdownIt({
    breaks: true,
})
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    link: String,
    date: String,
    skills: Array,
    description: String,
})

const formatList = (array) => {
    return new Intl.ListFormat('en').format(array)
}
const renderMarkdown = (raw) => {
    return md.render(raw)
}
</script>
