<template>
    <div id="app">
      <h1>Props in vue JS</h1>
      <Child name="Jinendra"/>
      <router-view/>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  export default {
    name : 'Parents',
    components : {
      Child
    }
  }
  </script>
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  nav {
    padding: 30px;
  }
  
  nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  
  nav a.router-link-exact-active {
    color: #42b983;
  }
  </style>
  