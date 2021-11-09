<template>
    <div class="about">
        <div class="md:flex md:mt-24 mb-12 items-center justify-between">
            <section class="md:w-full mb-4">
                <heading>
                    Hi, I'm <span class="rainbow">tilda</span>.
                </heading>
                <subheading>
                    I do stuff on the internet sometimes.
                </subheading>
                <ContactMethods/>
            </section>
        </div>
        <div class="md:flex md:mt-12 mb-12 items-center justify-between">
            <section class="md:w-full mb-4 mt-6 mr-6">
                <heading>A couple of facts about myself!</heading>
                <subheading>(I mean if you're here, you might as well get to know me a bit)</subheading>
                <ul>
                    <li>I'm a he (or a they). Either is fine :)</li>
                    <li>I'm pretty into computers, they're fun. (most of the time)</li>
                    <li>I like trying to help people when they have issues.</li>
                    <li>Talking your brain out with subjects you have no interest in is my specialty~</li>
                    <Card>blobwob</Card>
                </ul>
            </section>
        </div>
        <div class="md:flex mb-24 items-center justify-between">
            <section class="md:w-6/12 items-center content-center">
                <heading>I program in these languages &#8594;</heading>
                <subheading>(Though, could you consider Markdown anything near programming?)</subheading>
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
import ContactMethods from '../components/ContactMethods'
import Card from '../components/Card'

export default {
    components: {
        CodeStats,
        ContactMethods,
        Card
    }  
}
</script>