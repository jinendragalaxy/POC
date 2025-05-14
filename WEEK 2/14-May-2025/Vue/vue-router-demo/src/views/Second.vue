<template>
    <div>
      <h1>This is the Profile</h1>
      <div>
        <h3>Click below to go to the settings route</h3>
        <router-link to="/dashboard/settings">Go to Setting</router-link>
      </div>
      <!-- This router-view will display the third route when you go to /first/second/third -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Second'
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  