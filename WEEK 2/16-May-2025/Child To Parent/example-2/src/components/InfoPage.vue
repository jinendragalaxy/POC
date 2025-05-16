<template>
    <div>
      <h2>Info Page</h2>
      <div v-if="formData.name">
        <h3>Received Data:</h3>
        <p>Name: {{ formData.name }}</p>
        <p>Email: {{ formData.email }}</p>
        <p>Message: {{ formData.message }}</p>
      </div>
      <div v-else>
        <p>No data submitted yet.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['formData']
  };
  </script>
  