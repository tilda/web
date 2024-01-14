<template>
    <div>
        <div class="md:flex md:mt-24 mb-12 md:pl-6">
            <section class="md:w-full">
                <img src="../assets/avy.webp" title="Art by @ahppple (Twitter)" alt="Fan art of Rin Shima from Yuru Camp looking at viewer" class="rounded-full content-center mx-auto h-48 w-48">
                <br/>
                <heading>
                    Hi, I'm <span class="rainbow">tilda</span>.
                </heading>
                <subheading class="mb-4">
                    I do stuff on the internet sometimes.
                </subheading>
                <div class="grid grid-flow-row justify-center items-center md:grid-flow-col gap-2">
                    <Card href="https://github.com/tilda">
                        <subheading bold>GitHub Repos</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <heading v-else>{{ data.github }}</heading>
                    </Card>
                    <Card href="https://last.fm/user/imtilda">
                        <subheading bold v-if="!populated">Last Played Track</subheading>
                        <subheading bold v-else-if="data.lfm.nowPlaying">Current Track</subheading>
                        <subheading bold v-else>Last Played Track</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <subheading v-else small>"{{ data.lfm.title }}" <br/>by {{ data.lfm.artist }}</subheading>
                    </Card>
                    <Card href="https://steamcommunity.com/id/thonker">
                        <subheading bold v-if="!populated">Last Played Game</subheading>
                        <subheading bold v-else-if="data.steam.nowPlaying">Currently Playing</subheading>
                        <subheading bold v-else-if="data.steam.hoursPlayed === 0">Last Played Game</subheading>
                        <subheading bold v-else>Most Played Recently(?)</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <subheading v-else small>{{ data.steam.name }} <br/>({{ data.steam.hoursPlayed | actuallyReadableHours }})</subheading>
                    </Card>
                    <Card href="https://anilist.co/user/tda">
                        <subheading bold>Anime Watched</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <heading v-else>{{ data.anilist }}</heading>
                    </Card>
                </div>
                <br/><router-link to="/contact" class="text-sm">&#8594; Also see my other online presences</router-link>
                <br/><span class="text-xs">More statistics coming soon... probably - (?) see <a href="https://github.com/tilda/web/issues/15">tilda/web#15</a></span>
            </section>
        </div>
        <div class="mb-12">
            <section class="md:w-full sm:mt-6 md:mt-0">
                    <heading class="italic mb-2">"Who are you?"</heading>
                    <p class="text-justify">
                        Hi, I'm just someone who grew up around computers and decided to make them his hobby.
                        I started learning programming from a pretty young age, starting with "not a real language" HTML and moving onto Python and other various languages.
                        <br/>Currently, I'm on a sort of "long burnout", only really opening my editor when I need to make edits to my existing projects.
                        In the past, I was particularly focused on making Discord bots for my personal use, and in one case, for the general public (reaching around 700 servers at its peak).
                        <br/>My favorite activities are currently talking to my friends (both offline and online), playing rhythm games (like <i>osu!</i>, where I also participate in making "beatmaps" for the game) and listening to various types of music (with my current rotation mainly consisting of Japanese pop).
                        <br/><br/>Eventually though, I hope to get back into programming and work in the tech industry - as I am still extremely passionate about computing and want to make the world a better place using them, somehow.
                    </p>
            </section>
        </div>
        <div class="md:flex mb-24 items-center justify-between">
            <section class="md:w-6/12 items-center content-center">
                <heading>I program in these languages &#8594;</heading>
                <subheading>(Though, could you consider Markdown anything near programming?)</subheading>
                <a class="text-sm" target="_blank" href="https://codestats.net/users/tda">(Here's where this data comes from.)</a>
            </section>      
            <section class="md:w-6/12 sm:mt-6 md:mt-0 align-baseline">
                <CodeStats/>
            </section>
        </div>
    </div>
</template>

<script>
import CodeStats from '../components/CodeStats'
import Card from '../components/Card'
import axios from 'axios'

export default {
    components: {
        CodeStats,
        Card,
    },
    data() {
        return {
            populated: false,
            data: {}
        }
    },
    mounted() {
        this.populated = axios.get('https://copiumapi.yourdomain.workers.dev/api/v1/current')
        .then(response => (this.data = response.data))
        .finally(() => true)
    },
    filters: {
        actuallyReadableHours: function(time) {
            // just preparing for when my Cookie Clicker hours go into the thousands... lol
            return time.toLocaleString(navigator.language, { style: 'unit', unit: 'hour'})
        }
    }
}
</script>
