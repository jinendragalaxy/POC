<template>
  <div class="design-studio">
    <Toolbar @add-shape="addShape" @add-image="addImage" />

    <div class="editor-area">
      <BasicProps v-if="selectedObject" :object="selectedObject" @update="updateObject" @delete="deleteObject" />

      <div class="canvas-wrapper">
        <CanvasEditor ref="canvasEditor" @object-selected="setSelectedObject" @canvas-ready="initCanvas" />
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue'
import CanvasEditor from '@/components/CanvasEditor.vue'
import BasicProps from '@/components/properties/BasicProps.vue'
import { fabric } from 'fabric'

export default {
  components: { Toolbar, CanvasEditor, BasicProps },
  data() {
    return {
      canvas: null,
      selectedObject: null
    }
  },
  methods: {
    initCanvas(canvas) {
      this.canvas = canvas
      this.setupEventListeners()
    },
    setupEventListeners() {
      this.canvas.on('selection:created', (e) => {
        this.selectedObject = e.target
      })
      this.canvas.on('selection:cleared', () => {
        this.selectedObject = null
      })
    },
    addShape(shapeType) {
      let shape
      const defaultProps = {
        left: 100,
        top: 100,
        fill: '#3aa8ff',
        stroke: '#333',
        strokeWidth: 1,
        selectable: true
      }

      switch (shapeType) {
        case 'rect':
          shape = new fabric.Rect({ ...defaultProps, width: 100, height: 60 })
          break
        case 'circle':
          shape = new fabric.Circle({ ...defaultProps, radius: 50 })
          break
        case 'triangle':
          shape = new fabric.Triangle({ ...defaultProps, width: 80, height: 80 })
          break
      }

      this.canvas.add(shape)
      this.canvas.setActiveObject(shape)
      this.selectedObject = shape
      this.canvas.renderAll()
    },
    addImage(file) {
      fabric.Image.fromURL(URL.createObjectURL(file), (img) => {
        img.set({
          left: 100,
          top: 100,
          scaleX: 0.5,
          scaleY: 0.5,
          selectable: true
        });
        this.canvas.add(img);
        this.canvas.setActiveObject(img);
        this.selectedObject = img;
        this.canvas.renderAll();
      });
    },
    setSelectedObject(obj) {
      this.selectedObject = obj
    },
    updateObject(props) {
      this.selectedObject.set(props)
      this.canvas.renderAll()
    },
    deleteObject() {
      this.canvas.remove(this.selectedObject)
      this.selectedObject = null
      this.canvas.renderAll()
    }
  }
}
</script>

<style scoped>
.design-studio {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.editor-area {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.canvas-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  background-image:
    linear-gradient(45deg, #e6e6e6 25%, transparent 25%),
    linear-gradient(-45deg, #e6e6e6 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #e6e6e6 75%),
    linear-gradient(-45deg, transparent 75%, #e6e6e6 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  overflow: auto;
}
</style>