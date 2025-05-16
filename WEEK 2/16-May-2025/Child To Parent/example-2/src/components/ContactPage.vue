<template>
    <div>
      <h2>Contact Page</h2>
      <!-- ContactForm se emit karega -->
      <contact-form @submit-data="$emit('submit-data', $event)" />
      
      <div v-if="formData.name">
        <h3>Submitted Data:</h3>
        <p>Name: {{ formData.name }}</p>
        <p>Email: {{ formData.email }}</p>
        <p>Message: {{ formData.message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import ContactForm from './ContactForm.vue';
  
  export default {
    components: { ContactForm },
    props: ['formData']
  };
  </script>
  