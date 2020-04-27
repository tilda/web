<template>
  <body>
    <div id="app">
      <ContactCard/>
    </div>
  </body>
</template>

<script>
import ContactCard from './components/ContactCard'

export default {
  name: 'App',
  components: {
    ContactCard
  }
}
</script>

<style>
@import "~roboto-mono-webfont/roboto-mono.min.css";
#app { font: 16px/2 "Roboto Mono"; }
body {
  background-color: #2e3440; /* nord0 */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* thx slice :grin: */
}
:root {
  --color-background: #3b4252; /* nord1 */
}
</style>
