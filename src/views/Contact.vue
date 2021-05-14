<template>
    <div>
        <div class="md:flex md:mt-24">
            <section class="md:w-full mb-4 mt-6 mr-6">
                <h1 class="heading text-lg md:text-3xl">
                    Where I am online
                </h1>
            </section>
        </div>
        <div class="md:flex flex-row mb-12 items-center justify-center space-x-3">
            <span v-for="method in this.methods" :key="[method]">
                <ContactMethod :method="method"/>
            </span>
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
    },
}
</script>