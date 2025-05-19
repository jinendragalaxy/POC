<template>
  <div>
    <button @click="addRect">Rectangle</button>
    <button @click="addCircle">Circle</button>
    <button @click="addImage">Add Image</button>
    <button @click="clearAll">Clear All</button>

    <canvas ref="canvas1" width="500" height="500" style="border:1px solid #ccc;" />
  </div>
</template>

<script>
import { Canvas, Rect, Circle, FabricImage,} from 'fabric'

export default {
  name: 'FabricLite',
  data() { return { fab: null } },

  mounted() {
    this.fab = new Canvas(this.$refs.canvas1)
    this.fab.backgroundColor = '#f9f9f9'
    this.fab.requestRenderAll()
  },

  beforeDestroy() { this.fab.dispose() },

  methods: {
    addRect() {
      this.fab.add(new Rect({ left: 50, top: 50, width: 120, height: 80, fill: 'lightskyblue' }))
    },

    addCircle() {
      this.fab.add(new Circle({ left: 200, top: 100, radius: 50, fill: 'plum' }))
    },

    addImage() {
      console.log("clciked")
  const url = '/ship.jpeg';

  // @ts-ignore: Fabric.js marks Image as deprecated but still works
  FabricImage.fromURL(url, (img) => {
    img.set({ left: 100, top: 100, scaleX: 0.5, scaleY: 0.5 });
    this.fab.add(img);
    this.fab.setActiveObject(img);
    this.fab.renderAll();
  }, { crossOrigin: 'anonymous' });
},


    clearAll() {
      this.fab.clear()
      this.fab.backgroundColor = '#f9f9f9'
      this.fab.requestRenderAll()
    }
  }
}
</script>

<style scoped>
button {
  margin-right: 4px;
}
</style>
