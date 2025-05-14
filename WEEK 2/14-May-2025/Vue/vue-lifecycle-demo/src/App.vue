<template>
  <div>
    <h2>Vue 2 Lifecycle Hooks Project</h2>
    <nav>
      <router-link to="/created">Created</router-link> |
      <router-link to="/mounted">Mounted</router-link> |
      <router-link to="/updated">Updated</router-link> |
      <router-link to="/destroy">BeforeDestroy</router-link>
    </nav>
    <router-view />
  </div>
</template>

<!-- 
mounted
created
updated
destroyed
beforeCreate
beforeDestroy
beforeUpdate
beforeMount
 -->