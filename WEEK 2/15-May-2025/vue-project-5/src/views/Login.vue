<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" name="email" placeholder="Email" v-validate="'required|email'" />
      <span>{{ errors.first('email') }}</span>

      <input type="password" v-model="password" name="password" placeholder="Password" v-validate="'required|min:6'" />
      <span>{{ errors.first('password') }}</span>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  metaInfo: {
    title: 'Login - NDA Academy',
    meta: [{ name: 'description', content: 'Login page for NDA Sports Academy' }]
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          alert('Login successful');
          this.$router.push('/dashboard');
        }
      });
    }
  }
}
</script>

<style scoped>
@import '../assets/form.css';
</style>
