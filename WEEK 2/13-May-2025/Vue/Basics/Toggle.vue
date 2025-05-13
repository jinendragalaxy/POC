<template>
    <div>
      <h1 v-if="show">HI this is first block</h1>
      <h1 v-else>HI this is second block</h1>
      <button @click="display">Toggle</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const show = ref(true)
  
  function display() {
    show.value = !show.value
  }
  </script>
  