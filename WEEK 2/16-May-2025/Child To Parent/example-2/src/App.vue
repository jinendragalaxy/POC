<template>
  <div id="app">
    <nav>
      <router-link to="/info">Info Page</router-link> |
      <router-link to="/contact">Contact Page</router-link>
    </nav>
    <router-view :formData="formData" @submit-data="updateFormData"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {}
    };
  },
  methods: {
    updateFormData(data) {
      this.formData = data;
    }
  }
}
</script>

<style>
nav {
  padding: 10px;
  background-color: #007bff;
}
nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
