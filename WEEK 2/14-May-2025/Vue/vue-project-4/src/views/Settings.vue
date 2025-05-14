<template>
    <div class="settings">
      <h2>Settings</h2>
      <div class="settings-nav">
        <router-link to="/settings/profile">Profile</router-link> |
        <router-link to="/settings/password">Password</router-link>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Settings'
  }
  </script>
  
  <style scoped>
  .settings-nav {
    margin: 20px 0;
  }
  .settings-nav a {
    margin: 0 10px;
  }
  </style>