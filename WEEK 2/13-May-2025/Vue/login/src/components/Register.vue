<template>
  <div class="register-container">
    <div class="register-box">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
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
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm password"
          required
        />
        <button type="submit">Register</button>
      </form>

      <!-- Success or Error message -->
      <p v-if="message" :class="messageType">{{ message }}</p>

      <p>
        Already have an account? <router-link to="/">Login here</router-link>
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
      confirmPassword: '',
      message: '',
      messageType: ''
    };
  },
  methods: {
    handleRegister() {
      // Simulate validation and API call
      if (this.password !== this.confirmPassword) {
        this.message = 'Passwords do not match';
        this.messageType = 'error';
      } else {
        // Simulate successful registration
        this.message = 'Registration Successful! Redirecting to login...';
        this.messageType = 'success';
        setTimeout(() => {
          this.$router.push('/'); // Redirect to login after success
        }, 2000); // Redirect after 2 seconds
      }
    }
  }
};
</script>
