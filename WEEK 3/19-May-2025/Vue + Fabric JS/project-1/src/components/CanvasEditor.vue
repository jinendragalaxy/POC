<template>
    <div class="canvas-container">
      <canvas ref="fabricCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
      <input 
        type="file" 
        ref="imageUpload" 
        accept="image/*" 
        style="display: none" 
        @change="handleImageUpload"
      >
    </div>
  </template>
  
  <script>
  import { 
    Canvas, 
    Textbox, 
    Rect, 
    Circle, 
    Triangle, 
    Image as FabricImage,
    Object as FabricObject
  } from 'fabric'
  
  export default {
    props: {
      canvasWidth: {
        type: Number,
        default: 800
      },
      canvasHeight: {
        type: Number,
        default: 600
      }
    },
    data() {
      return {
        canvas: null,
        activeObject: null
      }
    },
    mounted() {
      this.initCanvas()
    },
    methods: {
      initCanvas() {
        this.canvas = new Canvas(this.$refs.fabricCanvas, {
          backgroundColor: '#ffffff',
          preserveObjectStacking: true
        })
  
        // Set up event listeners
        this.setupCanvasEvents()
      },
  
      setupCanvasEvents() {
        this.canvas.on('selection:created', (e) => {
          this.activeObject = e.selected[0]
          this.$emit('object-selected', this.activeObject)
        })
  
        this.canvas.on('selection:updated', (e) => {
          this.activeObject = e.selected[0]
          this.$emit('object-selected', this.activeObject)
        })
  
        this.canvas.on('selection:cleared', () => {
          this.activeObject = null
          this.$emit('object-selected', null)
        })
  
        this.canvas.on('object:modified', () => {
          this.$emit('object-selected', this.activeObject)
        })
  
        this.canvas.on('object:moving', (e) => {
          this.constrainObjectToCanvas(e.target)
        })
      },
  
      constrainObjectToCanvas(obj) {
        // Keep object within canvas bounds
        obj.setCoords()
        const canvasWidth = this.canvas.width
        const canvasHeight = this.canvas.height
        
        if (obj.left < 0) obj.left = 0
        if (obj.top < 0) obj.top = 0
        if (obj.left + obj.width > canvasWidth) obj.left = canvasWidth - obj.width
        if (obj.top + obj.height > canvasHeight) obj.top = canvasHeight - obj.height
      },
  
      addTextObject(text, options = {}) {
        const textObj = new Textbox(text, {
          left: options.left || 50,
          top: options.top || 50,
          width: options.width || 200,
          fontSize: options.fontSize || 20,
          fontFamily: options.fontFamily || 'Arial',
          fill: options.fill || '#000000',
          fontWeight: options.fontWeight || 'normal',
          fontStyle: options.fontStyle || 'normal',
          underline: options.underline || false,
          textAlign: options.textAlign || 'left',
          editable: true,
          ...options
        })
  
        this.addObjectToCanvas(textObj)
      },
  
      addShape(shapeType, options = {}) {
        const shapeOptions = {
          left: options.left || 100,
          top: options.top || 100,
          fill: options.fill || '#3f51b5',
          stroke: options.stroke || '#303f9f',
          strokeWidth: options.strokeWidth || 2,
          ...options
        }
  
        let shape
  
        switch (shapeType) {
          case 'rectangle':
            shape = new Rect({
              ...shapeOptions,
              width: options.width || 100,
              height: options.height || 80
            })
            break
          case 'circle':
            shape = new Circle({
              ...shapeOptions,
              radius: options.radius || 50
            })
            break
          case 'triangle':
            shape = new Triangle({
              ...shapeOptions,
              width: options.width || 100,
              height: options.height || 100
            })
            break
          default:
            shape = new Rect({
              ...shapeOptions,
              width: options.width || 100,
              height: options.height || 80
            })
        }
  
        this.addObjectToCanvas(shape)
      },
  
      addObjectToCanvas(obj) {
        this.canvas.add(obj)
        this.canvas.setActiveObject(obj)
        this.canvas.requestRenderAll()
        this.$emit('object-added', obj)
      },
  
      triggerImageUpload() {
        this.$refs.imageUpload.click()
      },
  
      handleImageUpload(e) {
        const file = e.target.files[0]
        if (!file) return
  
        const reader = new FileReader()
        reader.onload = (event) => {
          FabricImage.fromURL(event.target.result, (img) => {
            // Scale image to fit canvas if too large
            const maxWidth = this.canvasWidth * 0.7
            const maxHeight = this.canvasHeight * 0.7
            
            if (img.width > maxWidth || img.height > maxHeight) {
              const scale = Math.min(
                maxWidth / img.width,
                maxHeight / img.height
              )
              img.scale(scale)
            }
  
            img.set({
              left: this.canvasWidth / 2 - (img.width * img.scaleX) / 2,
              top: this.canvasHeight / 2 - (img.height * img.scaleY) / 2,
              originX: 'center',
              originY: 'center'
            })
  
            this.addObjectToCanvas(img)
          })
        }
        reader.readAsDataURL(file)
        e.target.value = '' // Reset input
      },
  
      updateSelectedObject(props) {
        const activeObj = this.canvas.getActiveObject()
        if (!activeObj) return
  
        activeObj.set(props)
        this.canvas.requestRenderAll()
        this.$emit('object-updated', activeObj)
      },
  
      deleteSelectedObject() {
        const activeObj = this.canvas.getActiveObject()
        if (!activeObj) return
  
        this.canvas.remove(activeObj)
        this.canvas.discardActiveObject()
        this.canvas.requestRenderAll()
        this.$emit('object-deleted', activeObj)
      },
  
      moveLayer(direction) {
        const activeObj = this.canvas.getActiveObject()
        if (!activeObj) return
  
        if (direction === 'up') {
          activeObj.bringForward()
        } else if (direction === 'top') {
          activeObj.bringToFront()
        } else if (direction === 'down') {
          activeObj.sendBackwards()
        } else if (direction === 'bottom') {
          activeObj.sendToBack()
        }
  
        this.canvas.requestRenderAll()
      },
  
      clearCanvas() {
        this.canvas.clear()
        this.canvas.backgroundColor = '#ffffff'
        this.canvas.requestRenderAll()
      },
  
      saveAsJSON() {
        return JSON.stringify(this.canvas.toJSON())
      },
  
      loadFromJSON(json) {
        return new Promise((resolve) => {
          this.canvas.loadFromJSON(json, () => {
            this.canvas.requestRenderAll()
            resolve()
          })
        })
      },
  
      exportAsPNG(options = {}) {
        const defaultOptions = {
          format: 'png',
          quality: 1,
          multiplier: 2 // Higher quality export
        }
        
        return this.canvas.toDataURL({
          ...defaultOptions,
          ...options
        })
      },
  
      getActiveObject() {
        return this.canvas.getActiveObject()
      },
  
      getAllObjects() {
        return this.canvas.getObjects()
      }
    }
  }
  </script>
  
  <style>
  .canvas-container {
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background-color: #f5f5f5;
    background-image: 
      linear-gradient(45deg, #e0e0e0 25%, transparent 25%),
      linear-gradient(-45deg, #e0e0e0 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #e0e0e0 75%),
      linear-gradient(-45deg, transparent 75%, #e0e0e0 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  }
  </style>