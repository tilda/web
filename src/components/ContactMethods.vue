<template>
    <span class="md:flex flex-row items-center justify-center space-x-3">
        <span v-for="method in this.methods" :key="[method]">
            <ContactMethod :method="method"/>
        </span>
    </span>
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