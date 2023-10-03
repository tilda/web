<template>
    <div id="app" class="max-w-screen-lg mx-auto px-6 py-4 md:px-4 md:py-10">
        <div class="relative mb-8 rounded-b-lg" id="nav">
           
            <header class="flex items-center flex-wrap justify-between">
                <div class="block sm:hidden">
                    <button class="flex items-center px-3 py-3 text-gray-700 hover:text-gray-900" title="Menu" v-on:click="mobileMenu">
                        <Unicon width="20" height="20" name="bars" :fill="iconColor"/>
                    </button>
                </div> 
                <div class="mr-6">
                    <h3 class="text-2xl">
                        <a class="flex items-center logo">
                            <span class="rainbow"><router-link to="/">tilda</router-link></span>
                        </a>
                    </h3>
                </div>
                <ul id="navButtons" class="align-baseline sm:block flex-wrap md:flex md:items-center flex-grow px-2 md:p-0 hidden md:bg-transparent">
                    <li><router-link to="/blog">Blog</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                </ul>
                <div id="icons" class="md:text-right flex items-center md:justify-end">
                    <ThemeSwitcher/>
                    <a href="https://github.com/tilda/web" title="View this website's source on GitHub">
                        <Unicon width="24" height="24" name="github" :fill="iconColor"/>
                    </a>
                </div>
            </header>
        </div>
        <router-view/>
        <Footer/>
    </div>
</template>

<style scoped>
    .logo {
        user-select: none;
    }

    #nav {
        position: sticky;
        top: 0;
        backdrop-filter: blur(5px);
        z-index: 77727; /* fuck you youtube */
    }

    #nav a:link {
        text-decoration: none;
    }

    #nav li {
        display: inline;
    }
</style>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Footer from '@/components/Footer'

export default {
    components: {
        ThemeSwitcher,
        Footer
    },
    computed: {
        iconColor: function() {
            return this.$store.state.dark ? "white" : "black"
        }
    },
    methods: {
        mobileMenu: function() {
            document.querySelector('#navButtons').classList.toggle('hidden')
            document.querySelector('#icons').classList.toggle('pt-4')
            document.querySelector('#icons').classList.toggle('pl-4')
        }
    },
    mounted() {
        document.body.classList.add((this.$store.state.dark ? 'dark' : 'light'))
    }
}
</script>

<style>
@import "./assets/theming.css";

#app {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav li {
    padding-right: 15px;
}

#nav a {
    font-weight: bold;
    padding: 5px;
}
</style>
