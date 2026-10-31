<template>
    <div>
        <LoadingIndicator :loading="loading" :errored="errored" />
        <div v-if="!loading && !errored">
            <div class="border-2 border-ctp-overlay0 p-4 my-4">
                <div>
                    <router-link to="/blog" class="no-nav-arrow">
                        <StyledButton class="bg-ctp-surface0/50">
                            <span aria-hidden>←</span> go back to post listing
                        </StyledButton>
                    </router-link>
                    <span class="float-right">
                        <StyledButton @click="copyLocation" :disabled="copied || clipboardFail">{{ copied ? 'link copied!' : 'share' }} {{ clipboardFail ? '(failed?)' : '' }}</StyledButton>
                    </span>
                </div>
                <h1 class="pt-2">{{ post.value.title }}</h1>
                <span class="italic text-sm">{{ post.value.custom_excerpt ? post.value.custom_excerpt :
                    post.value.excerpt }}</span>
                <br>
                <span>
                    Published {{ new Date(post.value.published_at).toLocaleDateString() }} &mdash;
                    {{ readingTime(post.value) }}
                </span>
            </div>
            <div v-html="post.value.html"></div>
        </div>

    </div>
</template>

<script setup>
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import StyledButton from '@/components/StyledButton.vue'
import { readingTime } from '@tryghost/helpers'
import { inject, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const cms = inject('cms')
const post = reactive({})
const route = useRoute()
let loading = ref(true)
let errored = ref(false)
let copied = ref(false)
let clipboardFail = ref(false)

const copyLocation = () => {
    // timeout values here are vibes-based
    navigator.clipboard.writeText(window.location.href).then(() => {
        copied.value = true
        setTimeout(() => {
            copied.value = false
        }, 2000)
    }).catch(() => {
        clipboardFail.value = true
        setTimeout(() => {
            clipboardFail.value = false
        }, 5000)
    })
}

cms.posts.read({ slug: route.params.slug }, { include: 'tags,authors' }).then((res) => {
    post.value = res
}).catch(() => {
    errored.value = true
}).finally(() => {
    loading.value = false
})
</script>
