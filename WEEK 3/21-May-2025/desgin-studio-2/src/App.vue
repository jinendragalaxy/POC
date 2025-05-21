<template>
  <div id="app">
    <DesignStudio/>
  </div>
</template>

<script>
import DesignStudio from './views/DesignStudio.vue'

export default {
  name: 'App',
  components: {
    DesignStudio
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  overflow: hidden;
}
</style>