<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="submit">
        <input v-model="name" name="name" v-validate="'required'" placeholder="Name" />
        <span>{{ errors.first('name') }}</span>
  
        <input v-model="email" name="email" v-validate="'required|email'" placeholder="Email" />
        <span>{{ errors.first('email') }}</span>
  
        <input type="password" v-model="password" name="password" v-validate="'required|min:6'" placeholder="Password" />
        <span>{{ errors.first('password') }}</span>
  
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    metaInfo() {
      return {
        title: 'Register - NDA Sports Academy',
        meta: [
          { name: 'description', content: 'Create your NDA Sports Academy account.' }
        ]
      }
    },
    methods: {
      submit() {
        this.$validator.validateAll().then(valid => {
          if (valid) {
            alert('Registration successful!')
            this.$router.push('/login')
          }
        })
      }
    }
  }
  </script>
  