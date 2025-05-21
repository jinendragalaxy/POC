<template>
    <canvas ref="canvas"></canvas>
  </template>
  
  <script>
  import { fabric } from 'fabric'
  
  export default {
    mounted() {
      this.initCanvas()
    },
    methods: {
      initCanvas() {
        const canvas = new fabric.Canvas(this.$refs.canvas, {
          width: 800,
          height: 600,
          backgroundColor: '#ffffff',
          selectionColor: 'rgba(58, 168, 255, 0.3)',
          selectionBorderColor: '#3aa8ff',
          selectionLineWidth: 2
        })
  
        this.$emit('canvas-ready', canvas)
        
        canvas.on('selection:created', (e) => {
          this.$emit('object-selected', e.target)
        })
        
        canvas.on('selection:cleared', () => {
          this.$emit('object-selected', null)
        })
      }
    },
    beforeDestroy() {
      if (this.$refs.canvas) {
        this.$refs.canvas.dispose()
      }
    }
  }
  </script>
  
  <style scoped>
  canvas {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
  </style>