<template>
    <div>
        <div class="md:flex md:mt-24 mb-24">
            <section class="md:w-full mb-12 mt-6 mr-6">
                <h1 class="heading text-lg md:text-3xl">
                    Where I am online
                </h1>
                <h2 class="subheading text-md md:text-xl mb-6">
                    If you need to get ahold of me, here's how you do it.
                </h2>
                <span class="flex flex-column items-center" v-for="method in this.methods" :key="[method]">
                    <ContactMethod :method="method"/>
                </span>
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
            methods: contacts
        }
    },
    components: {
        ContactMethod
    }
}
</script>