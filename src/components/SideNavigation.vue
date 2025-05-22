<template>
  <nav class="flex flex-col sticky md:mr-8 md:h-screen md:w-48 px-8 pt-8 bg-crust z-50">
    <h1>IT ME!!!!</h1>
    <span class="md:hidden italic">Display menu items</span>
    <ul class="font-bold text-blue">
      <li><router-link to="/">about me</router-link></li>
      <li><router-link to="/contact">contact</router-link></li>
    </ul>
  </nav>
</template>

<style>
nav a.router-link-exact-active {
  color: var(-- );
}
</style>
