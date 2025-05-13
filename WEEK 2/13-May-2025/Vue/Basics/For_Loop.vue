<template>
    <div>
      <h1>For Loop</h1>
      <table border="2px">
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const users = ref([
    { id: 1, name: "Jinendra" },
    { id: 2, name: "Harsh" },
    { id: 3, name: "Neeraj" },
    { id: 4, name: "Megha" }
  ])
  </script>
  