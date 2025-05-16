<template>
  <div id="app">
    <h2>Fabric.js with Vue 2 (NPM)</h2>
    <button @click="addRectangle">Add Rectangle</button>
    <button @click="addCircle">Add Circle</button>
    <canvas id="myCanvas" width="600" height="400" ></canvas>
  </div>
</template>

<script>
import { Canvas, Rect, Circle } from 'fabric';

export default {
  name: 'App',
  data() {
    return {
      canvas: null
    };
  },
  mounted() {
    this.canvas = new Canvas('myCanvas');

    const defaultRect = new Rect({
      left: 100,
      top: 100,
      fill: 'skyblue',
      width: 100,
      height: 60
    });

    this.canvas.add(defaultRect);
  },
  methods: {
    addRectangle() {
      const rect = new Rect({
        left: 50,
        top: 50,
        fill: 'orange',
        width: 100,
        height: 70
      });
      this.canvas.add(rect);
    },
    addCircle() {
      const circle = new Circle({
        left: 200,
        top: 100,
        fill: 'green',
        radius: 40
      });
      this.canvas.add(circle);
    }
  }
};
</script>

<style>
body {
  font-family: sans-serif;
  padding: 20px;
}
#myCanvas {
  margin-top: 50px;
  margin-right: 20px;
  border: 2px solid black;
}
</style>
