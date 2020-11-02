<template>
    <div>
        <div class="md:flex md:mt-24 mb-24 items-center justify-between">
            <section class="md:w-6/12 items-center content-center">
                <h1 class="heading text-lg md:text-3xl">
                    Where I am online
                </h1>
                <div v-for="method in this.methods" :key="[method]">
                    <ContactMethod :method="method"/>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import ContactMethod from '../components/ContactMethod'
import contacts from '../static/contacts'

export default {
    data() {
        return {
            methods: null
        }
    },
    components: {
        ContactMethod
    },
    mounted() {
        this.methods = contacts
    }    
}
</script>