<template>
    <div class="about">
        <div class="md:flex md:mt-24 mb-8 items-center justify-between">
            <section class="md:w-full">
                <heading>
                    Hi, I'm <span class="rainbow">tilda</span>.
                </heading>
                <subheading>
                    I do stuff on the internet sometimes.
                </subheading>
                <div class="grid grid-flow-col">
                    <Card href="https://github.com/tilda">
                        <subheading class="font-bold">GitHub Repos</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <heading v-else>{{ data.github }}</heading>
                    </Card>
                    <Card href="https://last.fm/user/imtilda">
                        <subheading class="font-bold" v-if="!populated">Last Played Track</subheading>
                        <subheading class="font-bold" v-else-if="data.lfm.nowPlaying">Current Track</subheading>
                        <subheading class="font-bold" v-else>Last Played Track</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <subheading v-else>"{{ data.lfm.title }}" <br/>by {{ data.lfm.artist }}</subheading>
                    </Card>
                    <Card href="https://steamcommunity.com/id/thonker">
                        <subheading class="font-bold">Last Game Played</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <subheading v-else>{{ data.steam.name }} <br/>({{ data.steam.hoursPlayed | actuallyReadable }})</subheading>
                    </Card>
                    <Card href="https://anilist.co/user/tda">
                        <subheading class="font-bold">Anime Watched</subheading>
                        <subheading v-if="!populated">...</subheading>
                        <heading v-else>{{ data.anilist }}</heading>
                    </Card>
                </div>
                <br/>
                <router-link to="/contact" class="text-sm">You can also look at my other social medias here, if you're interested</router-link>
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
import Card from '../components/Card'
import axios from 'axios'

export default {
    components: {
        CodeStats,
        Card
    },
    data() {
        return {
            populated: false,
            data: {}
        }
    },
    mounted() {
        axios.get('https://copiumapi.yourdomain.workers.dev/api/v1/current')
        .then(response => (this.data = response.data))
        .finally(this.populated = true)
    },
    filters: {
        actuallyReadable: function(beep) {
            // just preparing for when my Cookie Clicker hours go into the thousands... lol
            return beep.toLocaleString(navigator.language, { style: 'unit', unit: 'hour'})
        }
    }
}
</script>