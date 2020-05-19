<template>
    <div id="app">
        <div id="nav">
            <span class="portal">
                <router-link to="/">Home</router-link>
            </span>
            <span class="portal">
                <router-link to="/about">About</router-link>
            </span>
            <span class="portal">
                <ThemeSwitcher />
            </span>
        </div>
        <router-view />
    </div>
</template>

<style>
@import "~roboto-mono-webfont/roboto-mono.min.css";
#app {
  font: 16px/2 "Roboto Mono";
  background-color: transparent;
}
body {
  background-color: #2e3440; /* nord0 */
  color: #eceff4;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* thx slice :grin: */
  min-width: 100vw;
}

body.funny {
  background-image: url("./assets/poggers.png");
  background-repeat: repeat;
}

#nav {
  padding-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: #434c5e;
}

#nav a.router-link-exact-active {
  color: #efe9f0;
  background-color: #2e3440;
}
</style>

<script>
import ThemeSwitcher from "@/components/ThemeSwitcher"
import SeekPermission from "@/toasts/SeekPermission"
import injectAnalytics from '@/utils/analytics'

export default {
    components: {
        ThemeSwitcher,
    },
    mounted: function() {
        if (localStorage.getItem('analytics') === null) {
            this.analytics()
        } else if (localStorage.getItem('analytics') === true) {
            injectAnalytics(document.createElement('script'))
        }
    },
    methods: {
        analytics: function() {
            this.$toast(SeekPermission, {
                timeout: false,
                position: "bottom-center",
                closeOnClick: false,
                closeButton: false
            })
        },
        injectAnalytics: function(el) {
            el.src = 'https://shy.tda.wtf/ingress/ea409a8c-c531-42bd-af6d-5f44c32ab6d8/script.js'
        }
    }
}
</script>