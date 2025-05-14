<template>
    <div>
      <h1>This is the router page from the router link</h1>
      <button @click="goToAbout">Go to About Page</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Router',
    methods: {
      goToAbout() {
        // Navigate to /about
        this.$router.push('/about');
      }
    }
  }
  </script>
  