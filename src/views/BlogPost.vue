<template>
    <div>
        <div class="md:flex md:mt-24">
            <section class="md:w-full mb-4">
                <heading class="mb-2">
                    {{ post.data.title }}
                </heading>
                <subheading class="mb-4">
                    {{ post.data.summary }}
                </subheading>
                <span>{{ convertIsoDate(post.data.published) }}</span>
                <br/><span v-if="post.data.updated" class="text-sm">(updated {{ convertIsoDate(post.data.updated) }})</span>
            </section>
        </div>
        <div class="md:mt-8 text-left">
            <div v-html="post.data.body"/>
        </div>
    </div>
</template>

<script>
import { parseISO, format } from 'date-fns'

export default {
    data() {
        return {
            post: {},
            date: ''
        }
    },
    methods: {
        convertIsoDate(iso_date) {
            return format(parseISO(iso_date), 'PP p')
        }
    },
    created() {
        this.$cms.post.retrieve(this.$route.params.post).then(res => {
            this.post = res.data
        }).catch(res => {
            console.log(res) // will figure out actual error handling later!
        })
    }
}
</script>