<template>
    <div id="stats">
        <ul>
            <li v-for="lang in stats" :key="[lang[1].xps, lang[0]]">
                <br>
                <span class="subheading text-lg md:text-xl mb-6">{{ lang[0] }}</span>
                <span>{{ lang[1].xps }} characters</span>
                <br>
            </li>
        </ul>
        <br><small>Sorted in order of usage</small>
    </div>
</template>

<script>
const axios = require('axios').default

export default {
    data() {
        return {
            stats: null
        }
    },
    mounted() {
        axios.get('https://codestats.net/api/users/tda').then(response => (this.stats = Object.entries(response.data.languages).sort((a, b) => b[1].xps - a[1].xps)))
    }
    
}
</script>