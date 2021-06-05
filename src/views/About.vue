<template>
    <div class="about">
        <div class="md:flex md:mt-24 mb-12 items-center justify-between">
            <section class="md:w-full mb-4">
                <h1 class="heading text-lg md:text-3xl">
                    Hi, I'm <span class="rainbow">tilda</span>.
                </h1>
                <h2 class="subheading text-lg md:text-xl mb-6">
                    I do stuff on the internet sometimes.
                </h2>
                <div class="md:flex flex-row items-center justify-center space-x-3">
                    <span v-for="method in this.methods" :key="[method]">
                        <ContactMethod :method="method"/>
                    </span>
                </div> 
            </section>
        </div>
        <div class="md:flex md:mt-12 mb-12 items-center justify-between">
            <section class="md:w-full mb-4 mt-6 mr-6">
                <h1 class="heading text-lg md:text-3xl">A couple of facts about myself!</h1>
                <h2 class="subheading text-md md:text-xl mb-6">(I mean if you're here, you might as well get to know me a bit)</h2>
                <ul>
                    <li>I'm a he (or a they). Either is fine :)</li>
                    <li>I'm pretty into computers, they're fun. (most of the time)</li>
                    <li>I like trying to help people when they have issues.</li>
                    <li>Talking your brain out with subjects you have no interest in is my specialty~</li>
                </ul>
            </section>
        </div>
        <div class="md:flex mb-24 items-center justify-between">
            <section class="md:w-6/12 items-center content-center">
                <h1 class="heading text-lg md:text-3xl">I program in these languages &#8594;</h1>
                <h2 class="subheading text-md md:text-xl mb-6">(Though, could you consider Markdown anything near programming?)</h2>
                <a class="text-sm" target="_blank" href="https://codestats.net/users/tda">(Here's where this data comes from.)</a>
            </section>      
            <section class="md:w-6/12 mt-6 mr-6 align-baseline">
                <CodeStats/>
            </section>
        </div>
    </div>
</template>

<script>
import CodeStats from '../components/CodeStats'
import ContactMethod from '../components/ContactMethod.vue'
import contacts from '../static/contacts'

export default {
    data() {
        return {
            methods: contacts
        }
    },
    components: {
        CodeStats,
        ContactMethod,
    }  
}
</script>