<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>Login/Register Demo</h1>
    <nav>
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  margin-bottom: 20px;
}
a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
</style>
