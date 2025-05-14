<template>
    <div>
      <h1>This is the Dashbaord</h1>
      <div>
        <h3>Click below to go to the profile route</h3>
        <router-link to="/dashboard/profile">Go to Profile</router-link>
      </div>
      <!-- This router-view will display the second route when you go to /first/second -->
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'First'
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  