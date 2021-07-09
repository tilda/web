<template>
    <div>
        <div class="md:flex md:mt-24">
            <section class="md:w-full md:max-h-screen mb-4">
                <h1 class="heading text-lg md:text-3xl mb-2">
                    Get in touch
                </h1>
                <h2 class="subheading text-lg md:text-xl mb-4">
                    Just in case you want to know all the random things I do!
                </h2>
                <ContactMethods class="mb-8"/>
                <h1 class="heading text-lg md:text-2xl mb-2">
                    Need something more direct?
                </h1>
                <Click2Copy text="tda@stairway.cf"/>
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