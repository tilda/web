<template>
    <div class="float-right">
        <span v-on:click="switchColorScheme()">
            <unicon v-if="dark" name="sun" fill="white"/>
            <unicon v-else name="moon" fill="black"/>
        </span>
    </div>
</template>

<style>
    #nav a.router-link-exact-active {
        color: #efe9f0;
    }
</style>

<script>
export default {
    data() {
        return {
            dark: true
        }
    },
    methods: {
        switchColorScheme: function() {
            this.dark = !this.dark
            let app = document.querySelector('#app')
            let link = document.querySelector('.portal')
            if (this.dark === true) {
                document.body.style.backgroundColor = '#2e3440'
                app.style.backgroundColor = '#2e3440'
                app.style.color = '#eceff4'
                link.style.color = '#434c5e'
            } else {
                document.body.style.backgroundColor = '#eceff4'
                app.style.backgroundColor = '#eceff4'
                app.style.color = '#2e3440'
                link.style.color = '#434c5e'
            }
            
        }
    }
}
</script>