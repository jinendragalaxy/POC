<template>
  <div class="studio-layout">
    <Toolbar :canvas="canvas" :clipRect="clipRect" @show-random-popup="showRandomPopup = true" @show-sticker-popup="showStickerPopup = true" />
    <!-- Popup component for sticker -->
    <Popup :visible="showStickerPopup" title="Choose a Sticker" @close="showStickerPopup = false">
      <div class="sticker-list">
        <img v-for="sticker in stickers" :key="sticker.id" :src="sticker.url" @click="addSticker(sticker.url)"
          style="width: 80px; margin: 10px; cursor: pointer;" />
      </div>
    </Popup>

    <!-- Popup component for random images -->
    <Popup :visible="showRandomPopup" title="Choose a Random Image" @close="showRandomPopup = false">
      <div class="sticker-list">
        <img v-for="random in randoms" :key="random.id" :src="random.url" @click="addRandom(random.url)"
          style="width: 80px; margin: 10px; cursor: pointer;" />
      </div>
    </Popup>

    <div class="canvas-area">
      <FabricCanvas ref="fabricCanvas" @canvas-ready="setCanvas" />
      <TShirtArea :canvas="canvas" @clip-ready="setClipRect" />
      <ClipArea :canvas="canvas" @clip-ready="setClipRect" />

    </div>
    <PropertiesPanel :canvas="canvas" />
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';
import FabricCanvas from '../components/FabricCanvas.vue';
import PropertiesPanel from '../components/PropertiesPanel.vue';
import TShirtArea from '../components/TShirtArea.vue';
import ClipArea from '../components/ClipArea.vue'
import Popup from '@/components/Common/Popup.vue';
export default {
  components: { Toolbar, FabricCanvas, PropertiesPanel, TShirtArea, ClipArea, Popup },
  data() {
    return {
      canvas: null,
      clipRect: null,
      showRandomPopup: false,
      showStickerPopup: false,
      randoms: [
        { id: 1, url: "https://picsum.photos/200" },
        { id: 2, url: "https://loremflickr.com/g/200/240/paris" },
        { id: 3, url: "https://cdn-icons-png.flaticon.com/512/616/616468.png" },
      ],
      stickers: [
        { id: 1, url: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
        { id: 2, url: "https://cdn-icons-png.flaticon.com/512/616/616430.png" },
        { id: 3, url: "https://cdn-icons-png.flaticon.com/512/616/616468.png" },
      ],
    };
  },
  methods: {
    setCanvas(c) {
      this.canvas = c;
    },
    setClipRect(r) {
      this.clipRect = r;
    },

    addSticker(url) {
      if (!this.clipRect) {
        console.warn("Clip area not ready yet");
        return;
      }

      const { left, top } = this.clipRect;
      fabric.Image.fromURL(url, (img) => {
        img.set({ left: left + 20, top: top + 20, scaleX: 0.3, scaleY: 0.3 });
        this.canvas.add(img);
        this.canvas.setActiveObject(img);
        this.canvas.renderAll();
        this.showStickerPopup = false;
      }, { crossOrigin: 'anonymous' });
    },

    //add Random
    addRandom(url) {
      if (!this.clipRect) {
        console.warn("Clip area not ready yet");
        return;
      }

      const { left, top } = this.clipRect;
      fabric.Image.fromURL(url, (img) => {
        img.set({ left: left + 20, top: top + 20, scaleX: 0.3, scaleY: 0.3 });
        this.canvas.add(img);
        this.canvas.setActiveObject(img);
        this.canvas.renderAll();
        this.showRandomPopup = false;
      }, { crossOrigin: 'anonymous' });
    },
    //method to event handle od delete
    handleKeyPress(e) {
      if (!this.canvas) return;

      if (e.key === 'Delete') {
        const activeObjects = this.canvas.getActiveObjects();

        if (activeObjects.length) {
          activeObjects.forEach(obj => {
            this.canvas.remove(obj)
            console.log("Object Remove");
          })
          this.canvas.discardActiveObject();
          this.canvas.requestRenderAll()
        }
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeyPress);
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyPress)
  },
};
</script>

<style scoped>
.studio-layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.canvas-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
