<template>
  <div>
    <canvas ref="canvas" width="600" height="400" style="border:1px solid #ccc;"></canvas>
    <br />
    <button @click="addRect">Add Rectangle</button>
    <button @click="addCircle">Add Circle</button>
    <button @click="addImage">Add Image</button>
  </div>
</template>

<script>
import { fabric } from 'fabric';

export default {
  data() {
    return {
      canvas: null,
    };
  },
  mounted() {
    this.canvas = new fabric.Canvas(this.$refs.canvas);
  },
  methods: {
    addRect() {
      console.log('Add Rectangle button clicked');
      const rect = new fabric.Rect({
        left: 50,
        top: 50,
        fill: 'blue',
        width: 100,
        height: 60,
      });
      this.canvas.add(rect);
      this.canvas.setActiveObject(rect);
      this.canvas.renderAll();
    },
    addCircle() {
      console.log('Add Circle button clicked');
      const circle = new fabric.Circle({
        left: 200,
        top: 50,
        fill: 'green',
        radius: 50,
      });
      this.canvas.add(circle);
      this.canvas.setActiveObject(circle);
      this.canvas.renderAll();
    },
    addImage() {
      console.log('Add Image button clicked');
      try {
        fabric.Image.fromURL('data:image/png;base64,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', (img) => {
          img.set({
            left: 350,
            top: 50,
            scaleX: 0.5,
            scaleY: 0.5,
          });
          this.canvas.add(img);
          this.canvas.setActiveObject(img);
          this.canvas.renderAll();
          console.log('Image added to canvas');
        }, { crossOrigin: 'anonymous' });
      } catch (error) {
        console.error('Error adding image:', error);
      }
    },
  },
};
</script>

<style>
/* optional styles */
</style>
