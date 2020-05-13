<template>
    <div id="app">
      <div id="nav">
        <span class="portal"><router-link to="/">Home</router-link></span>
        <span class="portal"><router-link to="/about">About</router-link></span>
        <span class="portal"><ThemeSwitcher/></span>
      </div>
      <router-view/>
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
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default {
  components: {
    ThemeSwitcher
  }  
}
</script>