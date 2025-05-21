<template>
  <div class="toolbar">
    <h3>Toolbar</h3>
    <button @click="addShape('rect')">Rectangle</button>
    <button @click="addShape('circle')">Circle</button>
    <button @click="addShape('triangle')">Triangle</button>
    <button @click="addShape('ellipse')">Ellipse</button>
    <!-- <button @click="addGroup1">Group Text & Circle</button> -->
    <button @click="addText">Text</button>
    <input type="file" @change="uploadImage" />
    <hr />
    <button @click="deleteObject">Delete</button>
    <button @click="bringForward">Bring Forward</button>
    <button @click="sendBackward">Send Backward</button>
    <button @click="downloadPNG">Export PNG</button>
  </div>
</template>

<script>


export default {
  props: ['canvas'],
  methods: {
    addShape(type) {
      let shape;
      switch (type) {
        case 'rect':
          shape = new fabric.Rect({ width: 100, height: 60, fill: 'lightblue', left: 50, top: 50 });
          break;
        case 'circle':
          shape = new fabric.Circle({ radius: 50, fill: 'lightgreen', left: 50, top: 50 });
          break;
        case 'triangle':
          shape = new fabric.Triangle({ width: 100, height: 100, fill: 'pink', left: 50, top: 50 });
          break;
        case 'ellipse':
          shape = new fabric.Ellipse({
            rx: 75, ry: 45, fill: 'orange', left: 50, top: 50
          });
          break;
      }
      this.canvas.add(shape);
    },
    addText() {
      const text = new fabric.IText('Edit me', {
        left: 50,
        top: 50,
        fill: '#000',
        fontSize: 24
      });
      this.canvas.add(text);
    },

    // addGroup1(){
    //   let group = new fabric.Group([circle, text]{
    //     left:150,
    //     top:100,
    //   })
    //   this.canvas.add(group)
    // },

    uploadImage(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = evt => {
        fabric.Image.fromURL(evt.target.result, img => {
          img.scale(0.5);
          img.set({ left: 50, top: 50 });
          this.canvas.add(img);
        });
      };
      reader.readAsDataURL(file);
    },
    deleteObject() {
      const obj = this.canvas.getActiveObject();
      if (obj) this.canvas.remove(obj);
    },
    // bringForward() {
    //   console.log('HeLLO');
    //   const obj = this.canvas.getActiveObject();
    //   console.log(obj);
    //   if (obj) this.canvas.bringForward(obj);
    //   // console.log(this.canvas.bringForward(obj));
    //   const index = this.canvas.getObjects().indexOf(obj);
    //   console.log(`Current z-index: ${index}`);
    //   this.canvas.renderAll();
    // },
    bringForward() {

      const obj = this.canvas.getActiveObject();

      if (!obj) {

        console.warn('No active object found.');

      }

      const objects = this.canvas.getObjects();

      const index = objects.indexOf(obj);

      console.log(`Current z-index: ${index} / ${objects.length - 1}`);

      this.canvas.bringForward(obj);

      this.canvas.renderAll();

      // Check updated position

      const newIndex = this.canvas.getObjects().indexOf(obj);

      console.log(`New z-index: ${newIndex}`);

    },

    sendBackward() {
      const obj = this.canvas.getActiveObject();
      if (obj) this.canvas.sendBackwards(obj);
    },
    downloadPNG() {
      const dataURL = this.canvas.toDataURL({ format: 'png' });
      const a = document.createElement('a');
      a.href = dataURL;
      a.download = 'design.png';
      a.click();
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