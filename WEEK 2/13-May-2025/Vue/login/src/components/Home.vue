<template>
    <div class="home-container">
      <div class="home-box">
        <h1>Welcome to the Dashboard</h1>
        <p class="subtitle">You have successfully logged in.</p>
        <button @click="logout">Logout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
    methods: {
      logout() {
        // Navigate to login
        this.$router.push("/");
      },
    },
  };
  </script>
  