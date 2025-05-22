<template>
  <div :class="`flex ${currentTheme} bg-base`">
    <div>
      <SideNavigation/>
    </div>
    <div class="mt-8">
      <router-view/>  
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const currentTheme = ref('')

onMounted(() => {
    const themeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateCurrentTheme = (theme) => {
        currentTheme.value = theme.matches ? 'macchiato' : 'latte'
    }

    updateCurrentTheme(themeQuery)
    themeQuery.addEventListener('change', updateCurrentTheme)

    onUnmounted(() => {
        themeQuery.removeEventListener('change', updateCurrentTheme)
    })
})
</script>

<script>
import SideNavigation from "@/components/SideNavigation";

export default {
  name: "App",
  components: {
    SideNavigation,
  },
};
</script>
