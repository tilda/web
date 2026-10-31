<template>
    <div v-if="loading || errored" :class="`border-2 border-ctp-overlay0 ${loading ? 'bg-ctp-blue-400/25' : ''} ${errored ? 'bg-ctp-red-400/25' : ''} p-4 mb-4`">
        <span v-if="loading">
            fetching data...
        </span>
        <span v-if="errored">
            ran into an error while retrieving data! check devtools for more information.<br/>

            if you know this isn't your network's fault, you may want to <router-link to="/contact">get in touch</router-link>
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    loading: {
        type: Boolean
    },
    errored: {
        type: Boolean
    }
})
</script>
