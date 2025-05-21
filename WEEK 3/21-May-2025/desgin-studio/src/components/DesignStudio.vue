<template>
    <div class="studio-layout">
      <Toolbar :canvas="canvas" />
      <FabricCanvas ref="fabricCanvas" @canvas-ready="setCanvas" />
      <PropertiesPanel :canvas="canvas" />
    </div>
  </template>
  
  <script>
  import Toolbar from './Toolbar.vue';
  import FabricCanvas from './FabricCanvas.vue';
  import PropertiesPanel from './PropertiesPanel.vue';
  
  export default {
    components: { Toolbar, FabricCanvas, PropertiesPanel },
    data() {
      return { canvas: null };
    },
    methods: {
      setCanvas(c) {
        this.canvas = c;
      }
    }
  };
  </script>
  
  <style scoped>
  .studio-layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  </style>
  