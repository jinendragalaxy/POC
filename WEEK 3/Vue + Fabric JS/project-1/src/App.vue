<template>
  <div class="design-studio">
    <h1>Custom Design Studio</h1>
    <div class="studio-container">
      <Toolbar @add-text="addText" @add-shape="addShape" @add-image="triggerImageUpload" />
      <CanvasEditor 
        ref="canvasEditor" 
        :canvasWidth="800" 
        :canvasHeight="600"
        @object-selected="handleObjectSelected"
      />
      <PropertiesPanel 
        v-if="selectedObject" 
        :object="selectedObject" 
        @update-props="updateObjectProperties"
        @delete-object="deleteSelectedObject"
        @layer-up="moveLayerUp"
        @layer-down="moveLayerDown"
      />
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import CanvasEditor from './components/CanvasEditor.vue'
import PropertiesPanel from './components/PropertiesPanel.vue'

export default {
  components: { Toolbar, CanvasEditor, PropertiesPanel },
  data() {
    return {
      selectedObject: null
    }
  },
  methods: {
    addText() {
      this.$refs.canvasEditor.addTextObject('Double click to edit', {
        left: 100,
        top: 100,
        fill: '#000000',
        fontFamily: 'Arial',
        fontSize: 20
      })
    },
    addShape(shapeType) {
      this.$refs.canvasEditor.addShape(shapeType)
    },
    triggerImageUpload() {
      this.$refs.canvasEditor.triggerImageUpload()
    },
    handleObjectSelected(obj) {
      this.selectedObject = obj
    },
    updateObjectProperties(props) {
      this.$refs.canvasEditor.updateSelectedObject(props)
    },
    deleteSelectedObject() {
      this.$refs.canvasEditor.deleteSelectedObject()
      this.selectedObject = null
    },
    moveLayerUp() {
      this.$refs.canvasEditor.moveLayer('up')
    },
    moveLayerDown() {
      this.$refs.canvasEditor.moveLayer('down')
    },
    saveDesign() {
    const json = this.$refs.canvasEditor.saveAsJSON()
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    
    const a = document.createElement('a')
    a.href = url
    a.download = 'design.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  },
  
  exportPNG() {
    const dataURL = this.$refs.canvasEditor.exportAsPNG()
    const a = document.createElement('a')
    a.href = dataURL
    a.download = 'design.png'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  },
  
  print() {
    const dataURL = this.$refs.canvasEditor.exportAsPNG()
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print Design</title>
          <style>
            body { margin: 0; padding: 0; display: flex; justify-content: center; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <img src="${dataURL}" onload="window.print();window.close()">
        </body>
      </html>
    `)
    printWindow.document.close()
  },
  
  loadDesign() {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (!file) return
      
      const reader = new FileReader()
      reader.onload = (event) => {
        this.$refs.canvasEditor.loadFromJSON(event.target.result)
      }
      reader.readAsText(file)
    }
    input.click()
  }
  }
}
</script>

<style>
.design-studio {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.studio-container {
  display: grid;
  grid-template-columns: 80px 1fr 300px;
  gap: 20px;
  margin-top: 20px;
}
</style>