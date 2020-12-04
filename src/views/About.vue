<template>
    <div class="about">
        <div class="md:flex md:mt-24 mb-24 items-center justify-between">
            <section class="md:w-full mb-12 mt-6 mr-6">
                <h1 class="heading text-lg md:text-3xl">
                    Hi, I'm <span class="rainbow">tilda</span>.
                </h1>
                <h2 class="subheading text-lg md:text-xl mb-6">
                    I'm (supposed to be) a full stack dev.<br> I also like watching anime and playing video games sometimes.
                </h2>
            </section>
        </div>
        <div class="md:flex md:mt-24 mb-24 items-center justify-between">
            <section class="md:w-6/12 items-center content-center">
                <h1 class="heading text-lg md:text-3xl">"What programming languages do you use?"</h1>
                <h2 class="subheading text-md md:text-xl mb-6">Your answer's on the right:</h2>
                <a class="text-sm" href="https://codestats.net/users/tda">(Here's where this data comes from.)</a>
            </section>      
            <section class="md:w-6/12 mb-12 mt-6 mr-6 align-baseline">
                <CodeStats/>
            </section>
        </div>
    </div>
</template>

<script>
import CodeStats from '../components/CodeStats'

export default {
    components: {
        CodeStats
    }  
}
</script>