<template>
    <div class="basic-props">
      <h3 class="props-title">Properties</h3>
      
      <div class="prop-group" v-if="selectedObject">
        <div class="prop-row">
          <label>X:</label>
          <input v-model.number="x" type="number" @change="updatePosition">
        </div>
        
        <div class="prop-row">
          <label>Y:</label>
          <input v-model.number="y" type="number" @change="updatePosition">
        </div>
        
        <div class="prop-row" v-if="hasDimension('width')">
          <label>Width:</label>
          <input v-model.number="selectedObject.width" type="number" @change="update">
        </div>
        
        <div class="prop-row" v-if="hasDimension('height')">
          <label>Height:</label>
          <input v-model.number="selectedObject.height" type="number" @change="update">
        </div>
        
        <div class="prop-row" v-if="hasDimension('radius')">
          <label>Radius:</label>
          <input v-model.number="selectedObject.radius" type="number" @change="update">
        </div>
        
        <div class="prop-row">
          <label>Color:</label>
          <input v-model="selectedObject.fill" type="color" @change="update">
        </div>
      </div>
      
      <button @click="$emit('delete')" class="delete-btn" v-if="selectedObject">
        Delete Selected
      </button>
      
      <div class="empty-state" v-else>
        <p>No object selected</p>
        <p>Click on an object to edit properties</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      object: Object
    },
    data() {
      return {
        x: 0,
        y: 0,
        selectedObject: null
      }
    },
    watch: {
      object: {
        immediate: true,
        handler(obj) {
          this.selectedObject = obj
          if (obj) {
            this.x = Math.round(obj.left)
            this.y = Math.round(obj.top)
          }
        }
      }
    },
    methods: {
      hasDimension(prop) {
        return this.selectedObject && this.selectedObject[prop] !== undefined
      },
      update() {
        this.$emit('update', this.selectedObject)
      },
      updatePosition() {
        this.selectedObject.set({ left: this.x, top: this.y })
        this.update()
      }
    }
  }
  </script>
  
  <style scoped>
  .basic-props {
    width: 250px;
    padding: 15px;
    background: white;
    border-right: 1px solid #e0e0e0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .props-title {
    margin-bottom: 15px;
    color: #2c3e50;
    font-size: 16px;
    font-weight: 600;
  }
  
  .prop-group {
    margin-bottom: 20px;
  }
  
  .prop-row {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  
  .prop-row label {
    width: 60px;
    font-size: 13px;
    color: #555;
  }
  
  .prop-row input[type="number"] {
    width: 80px;
    padding: 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .prop-row input[type="color"] {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    cursor: pointer;
  }
  
  .delete-btn {
    margin-top: auto;
    padding: 8px 12px;
    background: #ffebee;
    color: #c62828;
    border: 1px solid #ffcdd2;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 13px;
  }
  
  .delete-btn:hover {
    background: #ffcdd2;
  }
  
  .empty-state {
    color: #888;
    font-size: 13px;
    text-align: center;
    margin-top: 30px;
  }
  </style>