<template>
  <div class="register-container active">
    <div class="register-box">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <input type="password" v-model="confirmPassword" placeholder="Confirm Password" />
        <button type="submit">Register</button>
        <p v-if="error" style="color: red;">{{ error }}</p>
      </form>
      <a href="#" @click.prevent="goToLogin">Already have an account? Login</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  },
  methods: {
    handleRegister() {
      if (!this.username || !this.password || !this.confirmPassword) {
        this.error = 'All fields are required.';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.error = "Passwords do not match.";
        return;
      }

      // Simulate success
      alert("Registration successful!");
      this.$router.push({ name: 'Login' });
    },
    goToLogin() {
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>
