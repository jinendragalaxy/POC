<template>
    <div class="home-container">
      <div class="home-box">
        <h1>Welcome to the Home Page 🎉</h1>
        <p>You are successfully logged in.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e0f7fa;
  }
  .home-box {
    background: white;
    padding: 50px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  </style>
  