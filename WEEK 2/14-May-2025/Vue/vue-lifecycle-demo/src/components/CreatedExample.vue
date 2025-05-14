<template>
    <div>
      <h3>Created Hook Example</h3>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: ''
      }
    },
    created() {
      console.log('created() called')
      this.message = 'Data loaded in created()!'
    }
  }
  </script>
  