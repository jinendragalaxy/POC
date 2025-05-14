<template>
    <div class="user-detail">
      <h2>User Details</h2>
      <p>Showing details for user ID: {{ id }}</p>
      <div v-if="user">
        <h3>{{ user.username }}</h3>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
      </div>
      <div v-else>
        <p>Loading user data...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserDetail',
    props: {
      id: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        user: null
      }
    },
    created() {
      this.fetchUser()
    },
    methods: {
      async fetchUser() {
        try {
          const response = await fetch(`https://dummyjson.com/users/${this.id}`)
          this.user = await response.json()
        } catch (error) {
          console.error('Error fetching user:', error)
        }
      }
    },
    watch: {
      id() {
        this.fetchUser()
      }
    }
  }
  </script>