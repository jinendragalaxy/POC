<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/lifecycle">Lifecycle Demo</router-link> |
      <router-link to="/user/1">User 1</router-link> |
      <router-link to="/user/2">User 2</router-link> |
      <router-link to="/settings">Settings</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>