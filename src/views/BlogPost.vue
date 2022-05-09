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
                <span>{{ date }}</span>
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
    created() {
        this.$cms.post.retrieve(this.$route.params.post).then(res => {
            this.post = res.data
            this.date = format(parseISO(this.post.data.published), 'PPPppp')
        }).catch(res => {
            console.log(res) // will figure out actual error handling later!
        })
    }
}
</script>