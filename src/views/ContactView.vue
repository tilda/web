<template>
    <div>
        have a question? usually, emailing <a href="mailto:me@til.pm">me@til.pm</a> will get you the best response<br/>
        for work-related inquiries: <a href="mailto:hireme@til.pm">hireme@til.pm</a>
        <hr/>
        otherwise, you can usually find me hanging around any of these:
        <ol>
            <li v-for="contact in contacts" :key="contact">
                <ContactMethod :url="contact.url" :icon="contact.icon"></ContactMethod>
            </li>
        </ol>
    </div>
</template>

<script setup>
import ContactMethod from '@/components/ContactMethod.vue'
import contacts from '@/static/contacts.mjs'
</script>
