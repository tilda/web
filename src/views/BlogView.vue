<template>
    <div>
        <div class="border-2 border-ctp-overlay0 bg-ctp-blue-400/25 p-4 mb-4">
            <span v-if="loading">retrieving posts...</span>
            <span v-else-if="!loading && !errorState">
                viewing page {{ currentPage }}/{{ listMeta.value.pagination.pages }}
                &mdash;
                <button type="button" class="underline cursor-pointer border px-1 mr-2" @click="prevPage" @keyup="prevPage" v-if="listMeta.value.pagination.prev">
                    previous
                </button>
                <button type="button" class="underline cursor-pointer border px-1" @click="nextPage" @keyup="nextPage" v-if="listMeta.value.pagination.next">
                    next
                </button>
            </span>
        </div>
        <div v-if="errorState" class="border-2 border-ctp-overlay0 bg-ctp-red/25 p-4">
            couldn't retrieve post listing; <router-link to="/contact">please let me know!</router-link><br>
            reported cause:
            <code>
                {{ errorText }}
            </code>
        </div>

        <div v-for="post in postList.value" :key="post.id">
            <router-link :to="`/blog/${post.slug}`"
                class="border-2 border-ctp-overlay0 flex flex-row bg-ctp-crust/50 p-4 mb-4 hover:shadow-xl no-decoration">
                <div>
                    <div class="text-2xl font-bold">{{ post.title }}</div>
                    <div>{{ post.custom_excerpt ? post.custom_excerpt : post.excerpt }}</div>
                    <div class="text-sm">
                        Published {{ new Date(post.published_at).toLocaleDateString() }} &mdash; {{ readingTime(post) }}
                    </div>
                </div>
                <div class="ml-auto pl-8">
                    <ArrowUpRightIcon class="w-8" />
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/16/solid'
import { readingTime } from '@tryghost/helpers'
import { inject, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const cms = inject('cms')
const postList = reactive({})
const listMeta = reactive({})
const loading = ref(true)
const errorState = ref(false)
const errorText = ref('')
const currentPage = ref(route.query.page ?? 1)

const prevPage = () => {
    currentPage.value = listMeta.value.pagination.prev
}
const nextPage = () => {
    currentPage.value = listMeta.value.pagination.next
}
const loadPosts = () => {
    cms.posts
        .browse({ limit: 5, page: currentPage.value })
        .then((res) => {
            postList.value = res
            listMeta.value = res.meta
        })
        .catch((err) => {
            errorState.value = true
            errorText.value = err.toString()
        })
        .finally(() => {
            loading.value = false
        })
}

loadPosts()

watch(
    currentPage,
    (newPage) => {
        router.replace({ query: { ...route.query, page: newPage } })
        loadPosts()
    }
)
</script>
