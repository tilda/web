<template>
    <div class="mb-2">
        <input id="aaghh" class="rainbow text-xl md:text-4xl" type="text" @click="copy" :value="text" readonly>
        <br/>
        <small id="affirm">Click to copy!</small>
    </div>
</template>

<style scoped>
    #aaghh {
        background-color: transparent;
        text-align: center;
        cursor: pointer;
    }
</style>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        copy: function() {
            const the = document.getElementById('aaghh')
            const p = document.getElementById('affirm')
            the.select()
            the.setSelectionRange(0, 99999) // the joys of mobile!
            document.execCommand("copy")
            p.innerHTML = 'Copied!'
            setTimeout(function() {
                p.innerHTML = 'Click to copy!'
            }, 1500)
        }
    }
}
</script>