<template>
    <div class="user-detail">
      <h2>User Details</h2>
      <p>Showing details for user ID: {{ id }}</p>
      <!-- IF USER DATA IS AVAILABLE THAN DISPLAY IT -->
      <div v-if="user">
        <h3>{{ user.username }}</h3>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
      </div>
      <!-- ELSE CONDTION OTHERWISE -->
      <div v-else>
        <p>Loading user data...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserDetail',
    // PROPS RECEIVED FROM THE PARENT COMPONENT
    props: {
      id: {
        type: String,
        required: true
      }
    },
    // TO STORE INITIAL REACTIVE DATA 
    data() {
      return {
        user: null
      }
    },
    // CALLED AFTER THE COMPONENT IS CREATED AND FETCH USER DATA
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
    // WE USE WATCHER TO LISTEN FOR THE CHANGES IN THE ID PROP
    watch: {
      id() {
        this.fetchUser()
      }
    }
  }
  </script>