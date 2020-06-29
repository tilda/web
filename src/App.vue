<template>
  <div id="app" class="max-w-screen-lg mx-auto px-6 py-4 md:px-4 md:py-10">
    <div class="relative">
      <header class="flex items-center flex-wrap justify-between">
        <div class="mr-6">
          <h3 class="text-2xl ~urge !low">
            <a href="/" class="flex items-center">
              <span class="rainbow">tilda</span>
            </a>
          </h3>
        </div>
        <div class="block flex-wrap md:flex md:items-center md:justify-between flex-grow shadow-lg bg-gray-200 py-4 px-2 rounded-lg hidden md:bg-transparent md:shadow-none md:p-0">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </header>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
//  components: 
}
</script>

<style>
.rainbow {
  font-family: 'Roboto Mono';
  background: linear-gradient(to right, #11998E 0%, #38ef7d 100%);
  animation: rainbow 5s ease infinite;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* Shamelessly stolen from a random codepen, but I don't think they would care. */
@keyframes rainbow { 
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(-360deg); }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
