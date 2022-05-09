<template>
    <div>
        <div class="md:flex md:mt-24">
            <section class="md:w-full mb-4">
                <heading class="mb-2">
                    My blog
                </heading>
                <subheading class="font-normal">
                    The dark corner of the internet where I ramble about things.
                </subheading>
            </section>
        </div>
        <div class="md:mt-8">
            <subheading bold>Post list</subheading>
            <section class="md:w-full grid grid-flow-cols grid-cols-3">
                <Card :href="`/blog/${post.slug}`" left v-for="(post, index) in posts" class="mr-2" :key="`${post.slug}_${index}`">
                    <heading small>{{ post.title }}</heading>
                    <subheading small>{{ post.summary }}</subheading>
                    <span class="float-right text-xs pt-2">{{ convertIsoDate(post.published) }}</span>
                </Card>
            </section>
        </div>
        <span>
            <br/>
            <Unicon name="arrow-left" width="24" height="24" :fill="iconColor" v-if="meta.previous_page !== null"/>
            <span class="px-2">Page {{ currentPage }}</span>
            <Unicon name="arrow-right" width="24" height="24" :fill="iconColor" v-if="meta.next_page !== null"/>
        </span>
    </div>
</template>
<style scoped>
    .text-sm {
        font-size: 0.875rem !important; /* override forced subheading size */
    }
    .md\:min-h-80 {
        min-height: 320px;
    }
</style>
<script>
import Card from '../components/Card'
import { format, parseISO } from 'date-fns'

export default {
    data() {
        return {
            posts: [],
            currentPage: 1,
            meta: null
        }
    },
    methods: {
        listPosts(page) {
            this.$cms.post.list({
                page: page,
                page_size: 9
            }).then(res => {
                this.meta = res.data.meta
                this.posts = res.data.data
            })
        },
        convertIsoDate(iso_date) {
            return format(parseISO(iso_date), 'P')
        }
    },
    components: {
        Card
    },
    computed: {
        iconColor: function() {
            return this.$store.state.dark ? "white" : "black"
        }
    },
    created() {
        this.listPosts(this.currentPage)
    }

}
</script>