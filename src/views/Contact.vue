<template>
    <div>
        <div class="md:flex">
            <section class="md:w-full md:max-h-screen mb-4">
                <h1 class="heading text-lg md:text-2xl mb-2">
                    Contact via email:
                </h1>
                <Click2Copy text="tda@stairway.cf"/>
                <h1 class="heading text-lg md:text-2xl mb-2">
                    Or contact via Discord:
                </h1>
                <Click2Copy text="tilda#6729"/>
                <h1 class="heading text-lg md:text-2xl mb-2">
                    Also see the <router-link to="/about">About</router-link> page for social media accounts!
                </h1>
                <h2 class="subheading mt-2">
                    As long as it's not spam, I'll probably respond.
                </h2>
            </section>
        </div>

    </div>
</template>

<script>
import Click2Copy from '../components/Click2Copy.vue'

export default {
    components: {
        Click2Copy
    },
}
</script>