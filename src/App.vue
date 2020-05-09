<template>
  <body>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
  </body>
</template>

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

#nav {
  padding-bottom: 10px;
}

#nav a {
  font-weight: bold;
  color: #e5e9f0;
}

#nav a.router-link-exact-active {
  background-color: #eceff4;
  color: black;
}
</style>
