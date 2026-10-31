<template>
    <div>
        <LoadingIndicator :loading="loading" :errored="errored" />
        <div v-if="!loading && !errored" class="border-2 border-ctp-overlay0 bg-ctp-blue-400/25 p-4 mb-4">
            <span>viewing page {{ currentPage }}/{{ listMeta.value.pagination.pages }}</span>
            <span class="float-right">
                <button type="button"
                    :class="`underline ${listMeta.value.pagination.prev === null ? 'cursor-not-allowed text-ctp-subtext0/50' : 'cursor-pointer'} border px-1 mr-1`"
                    @click="prevPage" @keyup="prevPage" :disabled="listMeta.value.pagination.prev === null">
                    previous
                </button>
                <button type="button"
                    :class="`underline ${listMeta.value.pagination.next === null ? 'cursor-not-allowed text-ctp-subtext0/50' : 'cursor-pointer'} border px-1`"
                    @click="nextPage" @keyup="nextPage" :disabled="listMeta.value.pagination.next === null">
                    next
                </button>
            </span>
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
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import { useBlogPaginationStore } from '@/store'
import { ArrowUpRightIcon } from '@heroicons/vue/16/solid'
import { readingTime } from '@tryghost/helpers'
import { inject, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useBlogPaginationStore()

const cms = inject('cms')
const postList = reactive({})
const listMeta = reactive({})
const loading = ref(true)
const errored = ref(false)
const currentPage = ref(route.query.page || (store.page ?? 1))

const prevPage = () => {
    currentPage.value = listMeta.value.pagination.prev
}
const nextPage = () => {
    currentPage.value = listMeta.value.pagination.next
}
const loadPosts = () => {
    loading.value = true
    cms.posts
        .browse({ limit: 5, page: currentPage.value })
        .then((res) => {
            postList.value = res
            listMeta.value = res.meta
            store.page = currentPage.value
        })
        .catch(() => {
            errored.value = true
        })
        .finally(() => {
            loading.value = false
        })
}

watch(
    currentPage,
    (newPage) => {
        router.replace({ query: { ...route.query, page: newPage } })
        store.page = newPage
        loadPosts()
    }
)

loadPosts()
</script>
