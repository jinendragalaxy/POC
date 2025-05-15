<template>
  <div id="app">
    <DataTable />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DataTable from './components/Data_Table.vue';


export default Vue.extend({
  name: 'App',
  components: {
    DataTable,
  },
});
</script>
