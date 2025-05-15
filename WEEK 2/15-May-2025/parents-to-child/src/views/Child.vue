<template>
  <div>
    <h1>This is parents to child  </h1>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
export default {
 name : 'Child',
 props : ['name']
}
</script>

<style>

</style>