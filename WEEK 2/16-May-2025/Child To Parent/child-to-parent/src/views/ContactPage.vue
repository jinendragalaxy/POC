<template>
    <div>
      <h2>Contact Page</h2>
      <contact-form />
      <div v-if="formData">
        <h3>Submitted Data on Contact Page:</h3>
        <p>Name: {{ formData.name }}</p>
        <p>Email: {{ formData.email }}</p>
        <p>Message: {{ formData.message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/Contact-Form.vue';
  import { EventBus } from '../event-bus.js';
  
  export default {
    components: { ContactForm },
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
      EventBus.$off('form-submitted');  // Clean up event listener
    }
  }
  </script>
  