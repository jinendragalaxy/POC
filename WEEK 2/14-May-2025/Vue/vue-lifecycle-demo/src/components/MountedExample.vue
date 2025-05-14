<template>
    <div>
      <h3>Mounted Hook Example</h3>
      <p ref="text">This text will turn red after mount.</p>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      console.log('mounted() called')
      this.$refs.text.style.color = 'red'
    }
  }
  </script>
  