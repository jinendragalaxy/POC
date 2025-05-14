<template>
    <div>
      <h3>BeforeDestroy Hook Example</h3>
      <p>Watch console when you leave this route.</p>
    </div>
  </template>
  
  <script>
  export default {
    beforeDestroy() {
      console.log('beforeDestroy() - cleaning up!')
      alert('Leaving the page. Component will be destroyed.')
    }
  }
  </script>
  