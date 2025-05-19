<template>
    <div class="properties-panel" v-if="object">
      <h3>Properties</h3>
      
      <div class="property-group" v-if="object.type === 'textbox'">
        <label>Text</label>
        <textarea v-model="textValue" @change="updateText"></textarea>
        
        <label>Font Family</label>
        <select v-model="fontFamily" @change="updateProps">
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
        </select>
        
        <label>Font Size</label>
        <input type="number" v-model.number="fontSize" @change="updateProps">
        
        <label>Text Color</label>
        <input type="color" v-model="fill" @change="updateProps">
        
        <div class="text-styles">
          <button @click="toggleBold">B</button>
          <button @click="toggleItalic">I</button>
          <button @click="toggleUnderline">U</button>
        </div>
      </div>
      
      <div class="property-group" v-else>
        <label>Fill Color</label>
        <input type="color" v-model="fill" @change="updateProps">
        
        <label>Stroke Color</label>
        <input type="color" v-model="stroke" @change="updateProps">
        
        <label>Stroke Width</label>
        <input type="number" v-model.number="strokeWidth" @change="updateProps">
      </div>
      
      <div class="property-group">
        <label>Position X</label>
        <input type="number" v-model.number="left" @change="updateProps">
        
        <label>Position Y</label>
        <input type="number" v-model.number="top" @change="updateProps">
        
        <label>Rotation</label>
        <input type="number" v-model.number="angle" @change="updateProps">
        
        <label>Opacity</label>
        <input type="range" v-model.number="opacity" min="0" max="1" step="0.1" @change="updateProps">
        <span>{{ opacity }}</span>
      </div>
      
      <div class="actions">
        <button @click="$emit('layer-up')">Bring Forward</button>
        <button @click="$emit('layer-down')">Send Backward</button>
        <button class="delete" @click="$emit('delete-object')">Delete</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      object: {
        type: Object,
        default: null
      }
    },
    data() {
      return {
        // Common properties
        left: 0,
        top: 0,
        angle: 0,
        opacity: 1,
        fill: '#000000',
        stroke: '#000000',
        strokeWidth: 0,
        
        // Text properties
        textValue: '',
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'normal',
        fontStyle: 'normal',
        underline: false
      }
    },
    watch: {
      object: {
        immediate: true,
        handler(newObj) {
          if (!newObj) return
          
          // Update all properties when object changes
          this.left = newObj.left || 0
          this.top = newObj.top || 0
          this.angle = newObj.angle || 0
          this.opacity = newObj.opacity ?? 1
          this.fill = newObj.fill || '#000000'
          this.stroke = newObj.stroke || '#000000'
          this.strokeWidth = newObj.strokeWidth || 0
          
          if (newObj.type === 'textbox') {
            this.textValue = newObj.text
            this.fontFamily = newObj.fontFamily || 'Arial'
            this.fontSize = newObj.fontSize || 20
            this.fontWeight = newObj.fontWeight || 'normal'
            this.fontStyle = newObj.fontStyle || 'normal'
            this.underline = newObj.underline || false
          }
        }
      }
    },
    methods: {
      updateProps() {
        const props = {
          left: this.left,
          top: this.top,
          angle: this.angle,
          opacity: this.opacity,
          fill: this.fill,
          stroke: this.stroke,
          strokeWidth: this.strokeWidth
        }
        
        if (this.object.type === 'textbox') {
          props.fontFamily = this.fontFamily
          props.fontSize = this.fontSize
          props.fontWeight = this.fontWeight
          props.fontStyle = this.fontStyle
          props.underline = this.underline
        }
        
        this.$emit('update-props', props)
      },
      updateText() {
        this.$emit('update-props', { text: this.textValue })
      },
      toggleBold() {
        this.fontWeight = this.fontWeight === 'bold' ? 'normal' : 'bold'
        this.updateProps()
      },
      toggleItalic() {
        this.fontStyle = this.fontStyle === 'italic' ? 'normal' : 'italic'
        this.updateProps()
      },
      toggleUnderline() {
        this.underline = !this.underline
        this.updateProps()
      }
    }
  }
  </script>
  
  <style>
  .properties-panel {
    background: #f5f5f5;
    padding: 15px;
    border-radius: 4px;
    height: 100%;
    overflow-y: auto;
  }
  
  .properties-panel h3 {
    margin-top: 0;
    color: #333;
  }
  
  .property-group {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
  }
  
  .property-group label {
    display: block;
    margin: 10px 0 5px;
    font-size: 14px;
    color: #555;
  }
  
  .property-group input[type="text"],
  .property-group input[type="number"],
  .property-group select,
  .property-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .property-group textarea {
    min-height: 60px;
  }
  
  .text-styles {
    display: flex;
    gap: 5px;
    margin-top: 10px;
  }
  
  .text-styles button {
    width: 30px;
    height: 30px;
    font-weight: bold;
    background: #eee;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  
  .actions {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .actions button {
    padding: 8px;
    background: #3f51b5;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .actions button.delete {
    background: #f44336;
  }
  
  .actions button:hover {
    opacity: 0.9;
  }
  </style>