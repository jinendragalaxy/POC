<template>
    <div class="toolbar">
      <button @click="$emit('add-text')">Add Text</button>
      
      <div class="toolbar-section">
        <h4>Shapes</h4>
        <button @click="$emit('add-shape', 'rectangle')">Rectangle</button>
        <button @click="$emit('add-shape', 'circle')">Circle</button>
        <button @click="$emit('add-shape', 'triangle')">Triangle</button>
      </div>
      
      <button @click="$emit('add-image')">Add Image</button>
      
      <div class="toolbar-section">
        <h4>Export</h4>
        <button @click="saveDesign">Save Design</button>
        <button @click="exportPNG">Export PNG</button>
        <button @click="print">Print</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      saveDesign() {
        this.$emit('save-design')
      },
      exportPNG() {
        this.$emit('export-png')
      },
      print() {
        this.$emit('print')
      }
    }
  }
  </script>
  
  <style>
  .toolbar {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .toolbar button {
    padding: 8px 12px;
    background: #3f51b5;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .toolbar button:hover {
    background: #303f9f;
  }
  
  .toolbar-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .toolbar-section h4 {
    margin: 0 0 8px 0;
    color: #555;
  }
  </style>