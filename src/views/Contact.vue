<template>
    <div>
        <div class="md:flex md:mt-24">
            <section class="md:w-full md:max-h-screen mb-4">
                <heading class="mb-2">
                    Get in touch
                </heading>
                <subheading class="mb-6">
                    Just in case you want to know all the random things I do!
                </subheading>
                <ContactMethods class="mb-6"/>
                <heading class="sm:mt-10 md:mt-4">
                    Need something more direct?
                </heading>
                <Click2Copy text="me@til.pm"/>
            </section>
        </div>

    </div>
</template>

<script>
import Click2Copy from '../components/Click2Copy'
import ContactMethods from '../components/ContactMethods'

export default {
    components: {
        Click2Copy,
        ContactMethods
    },
}
</script>