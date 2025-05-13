<template>
  <div class="login-container active">
    <div class="login-box">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p v-if="error" style="color: red;">{{ error }}</p>
      </form>
      <a href="#" @click.prevent="goToRegister">Don't have an account? Register</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    handleLogin() {
      if (!this.username || !this.password) {
        this.error = 'Please enter both username and password.';
        return;
      }

      // Simulate success (you can replace this logic with actual backend auth)
      alert("Login successful!");
      this.$router.push({ name: 'Home' });
    },
    goToRegister() {
      this.$router.push({ name: 'Register' });
    }
  }
}
</script>
