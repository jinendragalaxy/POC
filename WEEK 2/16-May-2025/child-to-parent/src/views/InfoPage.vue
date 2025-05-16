<template>
    <div>
      <h2>Info Page</h2>
      <div v-if="formData">
        <h3>Submitted Data on Info Page:</h3>
        <p>Name: {{ formData.name }}</p>
        <p>Email: {{ formData.email }}</p>
        <p>Message: {{ formData.message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { EventBus } from '../event-bus.js';
  
  export default {
    data() {
      return {
        formData: null
      }
    },
    created() {
      EventBus.$on('form-submitted', (data) => {
        this.formData = data;
      });
    },
    beforeDestroy() {
      EventBus.$off('form-submitted');
    }
  }
  </script>
  