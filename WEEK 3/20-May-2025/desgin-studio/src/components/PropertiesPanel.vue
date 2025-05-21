<template>
    <div class="panel">
      <h3>Properties</h3>
      <div v-if="textSelected">
        <label>Font Size: <input type="number" v-model.number="fontSize" @change="updateFontSize" /></label>
        <label>Font Color: <input type="color" v-model="color" @input="updateColor" /></label>
        <label>Font Family:
          <select v-model="fontFamily" @change="updateFontFamily">
            <option value="Arial">Arial</option>
            <option value="Courier">Courier</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </label>
        <button @click="toggleBold">Bold</button>
        <button @click="toggleItalic">Italic</button>
        <button @click="toggleUnderline">Underline</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['canvas'],
    data() {
      return {
        active: null,
        fontSize: 24,
        color: '#000000',
        fontFamily: 'Arial'
      };
    },
    computed: {
      textSelected() {
        return this.active && this.active.type === 'i-text';
      }
    },
    watch: {
      canvas: {
        immediate: true,
        handler(canvas) {
          if (canvas) {
            canvas.on('selection:created', this.setActive);
            canvas.on('selection:updated', this.setActive);
            canvas.on('selection:cleared', () => this.active = null);
          }
        }
      }
    },
    methods: {
      setActive(e) {
        this.active = e.target;
        if (this.active.type === 'i-text') {
          this.fontSize = this.active.fontSize;
          this.color = this.active.fill;
          this.fontFamily = this.active.fontFamily || 'Arial';
        }
      },
      updateFontSize() {
        if (this.textSelected) {
          this.active.set('fontSize', this.fontSize);
          this.canvas.renderAll();
        }
      },
      updateColor() {
        if (this.active) {
          this.active.set('fill', this.color);
          this.canvas.renderAll();
        }
      },
      updateFontFamily() {
        if (this.textSelected) {
          this.active.set('fontFamily', this.fontFamily);
          this.canvas.renderAll();
        }
      },
      toggleBold() {
        if (this.textSelected) {
          const isBold = this.active.fontWeight === 'bold';
          this.active.set('fontWeight', isBold ? 'normal' : 'bold');
          this.canvas.renderAll();
        }
      },
      toggleItalic() {
        if (this.textSelected) {
          const isItalic = this.active.fontStyle === 'italic';
          this.active.set('fontStyle', isItalic ? 'normal' : 'italic');
          this.canvas.renderAll();
        }
      },
      toggleUnderline() {
        if (this.textSelected) {
          const isUnderlined = this.active.underline;
          this.active.set('underline', !isUnderlined);
          this.canvas.renderAll();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .panel {
    width: 220px;
    padding: 15px;
    background: #f9f9f9;
    border-left: 1px solid #ccc;
  }
  label {
    display: block;
    margin: 10px 0;
  }
  input[type="color"],
  select,
  input[type="number"] {
    width: 100%;
  }
  button {
    margin: 5px 5px 0 0;
    padding: 5px 10px;
    background: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
  }
  </style>
  