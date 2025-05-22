<template>
  <div class="toolbar">
    <h3>Toolbar</h3>
    <button @click="addShape('rect')">Rectangle</button>
    <button @click="addShape('circle')">Circle</button>
    <button @click="addShape('triangle')">Triangle</button>
    <button @click="addShape('ellipse')">Ellipse</button>
    <button @click="addText">Text</button>
    <input type="file" @change="uploadImage" />
    <hr />
    <button @click="deleteObject">Delete</button>
    <button @click="bringForward">Bring Forward</button>
    <button @click="sendBackward">Send Backward</button>
    <button @click="downloadPNG">Export PNG</button>
    <button @click="downloadPDF">Export PDF</button>
  </div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  props: {
    canvas: Object,
    clipRect: Object
  },
  methods: {
    addShape(type) {
      if (!this.clipRect) {
        console.warn('Clip area not ready yet');
        return;
      }

      const { left, top } = this.clipRect;
      const shapeProps = { left: left + 10, top: top + 10 };

      let shape;
      switch (type) {
        case 'rect':
          shape = new fabric.Rect({
            width: 100, height: 60, fill: 'lightblue', ...shapeProps
          });
          break;
        case 'circle':
          shape = new fabric.Circle({
            radius: 50, fill: 'lightgreen', ...shapeProps
          });
          break;
        case 'triangle':
          shape = new fabric.Triangle({
            width: 100, height: 100, fill: 'pink', ...shapeProps
          });
          break;
        case 'ellipse':
          shape = new fabric.Ellipse({
            rx: 75, ry: 45, fill: 'orange', ...shapeProps
          });
          break;
      }

      this.canvas.add(shape);
    },

    addText() {
      if (!this.clipRect) {
        console.warn('Clip area not ready yet');
        return;
      }

      const { left, top } = this.clipRect;

      const text = new fabric.IText('Edit me', {
        left: left + 10,
        top: top + 10,
        fill: '#000',
        fontSize: 24
      });

      this.canvas.add(text);
    },

    uploadImage(e) {
      if (!this.clipRect) {
        console.warn('Clip area not ready yet');
        return;
      }

      const file = e.target.files[0];
      if (!file) return;

      const { left, top } = this.clipRect;

      const reader = new FileReader();
      reader.onload = evt => {
        fabric.Image.fromURL(evt.target.result, img => {
          img.scaleToWidth(150);
          img.set({ left: left + 10, top: top + 10 });
          this.canvas.add(img);
        });
      };
      reader.readAsDataURL(file);
    },

    deleteObject() {
      const obj = this.canvas.getActiveObject();
      if (obj) this.canvas.remove(obj);
    },

    bringForward() {
      const obj = this.canvas.getActiveObject();
      if (!obj) return;
      this.canvas.bringForward(obj);
      this.canvas.renderAll();
    },

    sendBackward() {
      const obj = this.canvas.getActiveObject();
      if (!obj) return;
      this.canvas.sendBackwards(obj);
      this.canvas.renderAll();
    },

    downloadPNG() {
      const dataURL = this.canvas.toDataURL({ format: 'png' });
      const a = document.createElement('a');
      a.href = dataURL;
      a.download = 'design.png';
      a.click();
    },

    downloadPDF() {
      const imgData = this.canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save('canvas.pdf');
    }
  }
};
</script>

<style scoped>
.toolbar {
  width: 200px;
  padding: 15px;
  background: #f0f0f0;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 6px 10px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
}

button:hover {
  background-color: #115293;
}
</style>
