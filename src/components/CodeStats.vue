<template>
    <div id="stats">
        <b>{{ stats }}</b>
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
        axios.get('https://codestats.net/api/users/tda').then(response => (this.stats = response.data.languages))

    }
    
}
</script>