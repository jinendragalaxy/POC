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
// Fabric 6+ me ab 'fabric' named export se import karo
import * as fabric from 'fabric'

export default {
  name: 'FabricLite',
  data() {
    return {
      fab: null
    }
  },
  mounted() {
    // Canvas banate waqt fabric.Canvas ka use karo
    this.fab = new fabric.Canvas(this.$refs.canvas1)
    this.fab.backgroundColor = '#f9f9f9'
    this.fab.requestRenderAll()
  },
  beforeDestroy() {
    this.fab.dispose()
  },
  methods: {
    addRect() {
      const rect = new fabric.Rect({
        left: 50,
        top: 50,
        width: 120,
        height: 80,
        fill: 'lightskyblue',
      })
      this.fab.add(rect)
      this.fab.requestRenderAll()
    },
    addCircle() {
      const circle = new fabric.Circle({
        left: 200,
        top: 100,
        radius: 50,
        fill: 'plum',
      })
      this.fab.add(circle)
      this.fab.requestRenderAll()
    },
    async addImage() {
  const url = '/ship.jpeg'; // local image path from public folder

  try {
    const img = await new Promise((resolve, reject) => {
      fabric.Image.fromURL(
        url,
        (image) => image ? resolve(image) : reject('Image load failed'),
        { crossOrigin: 'anonymous' }
      )
    });

    img.set({
      left: 50,  // position x
      top: 50,   // position y
      scaleX: 2,  // scale size adjust karo agar image badi lage
      scaleY: 2,
    });

    this.fab.add(img);
    this.fab.requestRenderAll();
    console.log('Image added:', img);

  } catch (error) {
    console.error(error);
  }
},




    clearAll() {
      this.fab.clear()
      this.fab.backgroundColor = '#f9f9f9'
      this.fab.requestRenderAll()
    },
  },
}
</script>

<style scoped>
button {
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
