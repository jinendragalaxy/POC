<template>
  <div>
    <h1>Error- NO Page Found</h1>
    <button v-on:click ="back">Go back</button>
  </div>
</template>

<script>
export default {
 name : 'NotFound',
 methods: {
    back() {
        this.$router.push('/')
    }
 },
}
</script>

<style>

</style>