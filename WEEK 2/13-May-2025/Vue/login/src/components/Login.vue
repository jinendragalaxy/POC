<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input
          type="text"
          v-model="username"
          placeholder="Enter username"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Enter password"
          required
        />
        <button type="submit">Login</button>
      </form>

      <!-- Success or Error message -->
      <p v-if="message" :class="messageType">{{ message }}</p>

      <p>
        Don't have an account? <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
      messageType: ''
    };
  },
  methods: {
    handleLogin() {
      // Simulate a successful login
      if (this.username === 'user' && this.password === 'password') {
        this.message = 'Login Successful! Redirecting...';
        this.messageType = 'success';
        setTimeout(() => {
          this.$router.push('/home'); // Redirect to home after success
        }, 2000); // Redirect after 2 seconds
      } else {
        this.message = 'Invalid credentials, please try again';
        this.messageType = 'error';
      }
    }
  }
};
</script>
