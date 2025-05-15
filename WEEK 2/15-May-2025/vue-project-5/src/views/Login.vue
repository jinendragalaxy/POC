<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="submit">
        <input v-model="email" name="email" v-validate="'required|email'" placeholder="Email" />
        <span>{{ errors.first('email') }}</span>
  
        <input type="password" v-model="password" name="password" v-validate="'required|min:6'" placeholder="Password" />
        <span>{{ errors.first('password') }}</span>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    metaInfo() {
      return {
        title: 'Login - NDA Sports Academy',
        meta: [
          { name: 'description', content: 'Login to your NDA Sports Academy account.' }
        ]
      }
    },
    methods: {
      submit() {
        this.$validator.validateAll().then(valid => {
          if (valid) {
            alert('Login successful!')
            this.$router.push('/dashboard')
          }
        })
      }
    }
  }
  </script>
  