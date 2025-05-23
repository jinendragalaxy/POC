<template>
  <div class="studio-layout">
    <Toolbar :canvas="canvas" :clipRect="clipRect" />
    <div class="canvas-area">
      <FabricCanvas ref="fabricCanvas" @canvas-ready="setCanvas" />
      <TShirtArea :canvas="canvas" @clip-ready="setClipRect" />
      <ClipArea :canvas="canvas" @clip-ready="setClipRect" />

    </div>
    <PropertiesPanel :canvas="canvas" />
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';
import FabricCanvas from '../components/FabricCanvas.vue';
import PropertiesPanel from '../components/PropertiesPanel.vue';
import TShirtArea from '../components/TShirtArea.vue';
import ClipArea from '../components/ClipArea.vue'
export default {
  components: { Toolbar, FabricCanvas, PropertiesPanel, TShirtArea, ClipArea },
  data() {
    return {
      canvas: null,
      clipRect: null
    };
  },
  methods: {
    setCanvas(c) {
      this.canvas = c;
    },
    setClipRect(r) {
      this.clipRect = r;
    },
    //method to event handle od delete
    handleKeyPress(e) {
      if (!this.canvas) return;

      if (e.key === 'Delete') {
        const activeObjects = this.canvas.getActiveObjects();

        if (activeObjects.length) {
          activeObjects.forEach(obj => {
            this.canvas.remove(obj)
            console.log("Object Remove");
          })
          this.canvas.discardActiveObject();
          this.canvas.requestRenderAll()
        }
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyPress);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyPress)
  },
};
</script>

<style scoped>
.studio-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.canvas-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
