<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="name" name="name" placeholder="Name" v-validate="'required'" />
      <span>{{ errors.first('name') }}</span>

      <input type="email" v-model="email" name="email" placeholder="Email" v-validate="'required|email'" />
      <span>{{ errors.first('email') }}</span>

      <input type="password" v-model="password" name="password" placeholder="Password" v-validate="'required|min:6'" />
      <span>{{ errors.first('password') }}</span>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  metaInfo: {
    title: 'Register - NDA Academy',
    meta: [{ name: 'description', content: 'Register for NDA Sports Academy' }]
  },
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      this.$validator.validateAll().then(valid => {
        if (valid) {
          alert('Registration successful');
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
