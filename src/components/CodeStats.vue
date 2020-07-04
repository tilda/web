<template>
    <div id="codestats">
        <h2 class="subheading text-lg md:text-xl">Sorted in order of usage:</h2>
        <b v-if="loadingStats">Loading stats, give me a moment</b>
        <ul>
            <li v-for="lang in stats" :key="[lang[1].xps, lang[0]]">
                <span class="subheading text-lg mb-5 language-name">{{ lang[0] }}</span>
                <span v-if="fluent(lang[0])" class="ml-1">
                    <Unicon name="favorite" fill="gold" width="16" height="16" title="(I consider myself fluent in this language)"/>
                </span>
                <span class="pb-4"> {{ lang[1].xps | humanize }} characters</span>
                <br>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    #codestats {
        min-height: 330px;
        max-height: 330px;
        overflow: auto;
        padding-top: 5px;
    }
    .language-name {
        font-weight: bold;
    }
</style>

<script>
const axios = require('axios').default

export default {
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