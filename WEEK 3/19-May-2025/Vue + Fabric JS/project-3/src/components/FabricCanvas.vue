<template>
    <div>
      <button @click="addRect">Add Rectangle</button>
      <button @click="addCircle">Add Circle</button>
      <button @click="addImage">Add Image</button>
      <canvas ref="canvas" width="600" height="400" style="border:1px solid #000;"></canvas>
    </div>
  </template>
  
  <script>
  import fabric from 'fabric';
  
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
        fabric.Image.fromURL('https://fabricjs.com/assets/pug.png', (img) => {
          img.set({
            left: 350,
            top: 50,
            scaleX: 0.5,
            scaleY: 0.5,
          });
          this.canvas.add(img);
          this.canvas.setActiveObject(img);
          this.canvas.renderAll();
        });
      },
    },
  };
  </script>
  
  <style>
  button {
    margin: 5px;
  }
  </style>
  