<template>
    <div class="dashboard-container">
      <h2>Welcome to the Dashboard</h2>
      <button v-if="isLoggedIn" v-on:click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import '../styles/dashboard.css'
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  created() {
    // Check token when component is created
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.isLoggedIn = false;
      this.$router.push('/');
    }
  }
};
</script>