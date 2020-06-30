<template>
  <div id="app" class="max-w-screen-lg mx-auto px-6 py-4 md:px-4 md:py-10">
    <div class="relative" id="nav">
      <header class="flex items-center flex-wrap justify-between">
        <div class="mr-6">
          <h3 class="text-2xl ~urge !low">
            <a class="flex items-center logo">
              <span class="rainbow">tilda</span>
            </a>
          </h3>
        </div>
        <ul class="align-baseline block flex-wrap md:flex md:items-center flex-grow shadow-lg bg-gray-200 py-4 px-2 rounded-lg hidden md:bg-transparent md:shadow-none md:p-0">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Me</router-link></li>
        </ul>
        <div class="md:w-5/12 md:text-right flex items-center md:justify-end">
          <ThemeSwitcher/>
        </div>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher'

export default {
  components: {
    ThemeSwitcher
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
