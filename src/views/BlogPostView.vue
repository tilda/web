<template>
    <div>
        <router-link to="/blog"><span aria-hidden>←</span> go back to post listing</router-link>
        <div class="border-2 border-ctp-overlay0 p-4 my-4">
            <h1>{{ post.value.title }}</h1>
            <span class="italic text-sm">{{ post.value.custom_excerpt ? post.value.custom_excerpt : post.value.excerpt }}</span>
            <br>
            <span>
                Published {{ new Date(post.value.published_at).toLocaleDateString() }} &mdash;
                {{ readingTime(post.value) }}
            </span>
        </div>
        <div v-html="post.value.html"></div>
    </div>
</template>

<script setup>
import { readingTime } from '@tryghost/helpers'
import { inject, reactive } from 'vue'
import { useRoute } from 'vue-router'

const cms = inject('cms')
const post = reactive({})
const route = useRoute()

cms.posts.read({ slug: route.params.slug }, { include: 'tags,authors' }).then((res) => {
    post.value = res
})
</script>
