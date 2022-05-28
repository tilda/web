<template>
    <div class="about">
        <div class="md:flex md:mt-24 mb-12 md:pl-6">
            <section class="md:w-full">
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
                        <subheading v-else small>{{ data.steam.name }} <br/>({{ data.steam.hoursPlayed | actuallyReadable }})</subheading>
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
        <div class="md:flex mb-12 items-center justify-between">
            <section class="md:w-5/12">
                <heading>Who/what am I?</heading>
            </section>
            <section class="md:w-7/12 sm:mt-6 md:mt-0">
                <Frame aria-role="paragraph">
                    <heading class="pb-2">I'm a young geek from Texas.</heading>
                    <hr/>
                    <p class="pt-2 px-2">
                        To expand on this, I like programming, video games, and computers in general. Most, if not all, of the things I do revolve around these 3 interests.
                        <br/>You may be coming from my established presence on <i>osu!</i> (as a player/mapper), or it could be you just saw one of my projects on <i>GitHub</i> and wanted to see what else I've done.
                        <br/>In any case, I have a lot of places I like to spend my time, whether that'd be hammering out a new function in this very website or just playing a couple games with friends.
                    </p>
                </Frame>
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
import Frame from '../components/Frame'

export default {
    components: {
        CodeStats,
        Card,
        Frame
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