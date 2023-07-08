<template>
    <Frame aria-role="figure">
        <h2 class="subheading text-lg md:text-xl">Sorted in order of usage:</h2>
        <b v-if="loadingStats">Loading stats, give me a moment</b>
        <ul>
            <li v-for="lang in stats" :key="[lang[1].xps, lang[0]]">
                <span class="subheading text-lg mb-5 font-bold">{{ lang[0] }}</span>
                <span v-if="fluent(lang[0])" class="ml-1" title="I consider myself fluent in this language">
                    <Unicon name="favorite" fill="gold" width="16" height="16" icon-style="monochrome"/>
                </span>
                <span class="pb-4"> {{ lang[1].xps | humanize }} characters</span>
                <br>
            </li>
        </ul>
    </Frame>
</template>
<script>
const axios = require('axios').default
import Frame from './Frame'

export default {
    components: {
        Frame
    },
    data() {
        return {
            stats: null,
            loadingStats: true,
            fluentLangs: ['Python', 'Vue', 'JavaScript', 'HTML', 'CSS']
        }
    },
    filters: {
        humanize: function(number) {
            return number.toLocaleString()
        }
    },
    methods: {
        fluent: function(lang) {
            return (this.fluentLangs.includes(lang))
        }
    },
    mounted() {
        axios.get('https://codestats.net/api/users/tda')
        .then(response => (this.stats = Object.entries(response.data.languages).sort((a, b) => b[1].xps - a[1].xps)))
        .finally(() => this.loadingStats = false)
    }
    
}
</script>