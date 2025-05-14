<template>
    <div>
      <h3>Updated Hook Example</h3>
      <p>Counter: {{ count }}</p>
      <button @click="count++">Increment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    updated() {
      console.log('updated() called with count =', this.count)
    }
  }
  </script>
  