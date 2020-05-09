<template>
  <div class="about">
    <h1>Hi, I'm <Rainbow text="tilda"/>.</h1>
    <p>I'm a full stack developer specializing in <ChipLink name="Vue.js" link="https://vuejs.org"/> and <ChipLink name="Quart" link="https://gitlab.com/pgjones/quart"/>.</p>
    <p>In my free time, I like to program, watch anime, and chat with friends.</p>
  </div>
</template>

<style scoped>
.about { color: white; }
</style>

<script>
import Rainbow from '@/components/Rainbow'
import ChipLink from '@/components/ChipLink'

export default {
  name: 'About',
  components: {
    Rainbow, ChipLink
  }
}
</script>