<template>
    <div class="toolbar">
      <div class="tool-group">
        <button 
          v-for="shape in shapes" 
          :key="shape.type"
          @click="$emit('add-shape', shape.type)"
          :title="shape.label"
        >
          <span class="icon">{{ shape.icon }}</span>
        </button>
      </div>
      
      <div class="tool-group">
        <label class="image-upload-btn">
          <input type="file" @change="handleImageUpload" accept="image/*">
          <span class="icon">🖼️</span>
          <span class="tooltip">Add Image</span>
        </label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        shapes: [
          { type: 'rect', label: 'Rectangle', icon: '⬜' },
          { type: 'circle', label: 'Circle', icon: '⚪' },
          { type: 'triangle', label: 'Triangle', icon: '🔺' }
        ]
      }
    },
    methods: {
      handleImageUpload(e) {
        if (e.target.files[0]) {
          this.$emit('add-image', e.target.files[0])
          e.target.value = '' // Reset input
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .toolbar {
    display: flex;
    gap: 10px;
    padding: 10px;
    background: #2c3e50;
    color: white;
  }
  
  .tool-group {
    display: flex;
    gap: 5px;
    padding: 5px;
    background: rgba(255,255,255,0.1);
    border-radius: 4px;
  }
  
  button, .image-upload-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #34495e;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    position: relative;
    transition: all 0.2s;
  }
  
  button:hover, .image-upload-btn:hover {
    background: #3d566e;
  }
  
  .icon {
    font-size: 18px;
  }
  
  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;
  }
  
  button:hover .tooltip, 
  .image-upload-btn:hover .tooltip {
    opacity: 1;
  }
  
  .image-upload-btn input {
    display: none;
  }
  </style>