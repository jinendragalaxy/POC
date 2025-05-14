<template>
    <div class="login-container">
      <h2>Login Page</h2>
      <button v-on:click="login">Login</button>
    </div>
  </template>
  
  <script>
  import '../styles/login.css';
  
  export default {
    methods: {
      login() {
        localStorage.setItem('token', 'sample_token');
        this.$router.push('/dashboard');
      }
    }
  }
  </script>
  