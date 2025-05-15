<template>
    <div>
      <button @click="updateTitle">Update parent title</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Child',
    methods: {
      updateTitle() {
        this.$emit('change-title', "Parents Title Changed");
      }
    }
  };
  </script>
  