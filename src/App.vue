<template>
  <body>
    <div id="app">
      <Rainbow text="~"/>
    </div>
  </body>
</template>

<script>
import Rainbow from './components/Rainbow.vue'

export default {
  name: 'App',
  components: {
    Rainbow
  }
}
</script>

<style>
@import "~roboto-mono-webfont/roboto-mono.min.css";
body {
  font: 16px/2 "Roboto Mono";
  background-color: #2e3440; /* nord0 */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* thx slice :grin: */
}
</style>
