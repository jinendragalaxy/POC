<template>
  <div></div>
</template>

<script>
import { fabric } from 'fabric';

export default {
  name: 'ClipArea',
  props: ['canvas'],
  data() {
    return {
      clipArea: null,
    };
  },
  watch: {
    canvas(newCanvas) {
      if (newCanvas) {
        this.addClipArea(newCanvas);
      }
    }
  },
  methods: {
    addClipArea(canvas) {
      const clipWidth = 300;
      const clipHeight = 420;
      const clipLeft = canvas.width / 2 - clipWidth / 2;
      const clipTop = canvas.height / 2 - clipHeight / 2;

      this.clipArea = new fabric.Rect({
        left: clipLeft,
        top: clipTop,
        width: clipWidth,
        height: clipHeight,
        fill: 'rgba(0, 0, 0, 0.1)',
        stroke: 'blue',
        strokeWidth: 1,
        selectable: false,
        evented: false,
        hasControls: false,
        hasBorders: false,
        hoverCursor: 'default',
      });

      canvas.add(this.clipArea);
      canvas.renderAll();

      this.$emit('clip-ready', this.clipArea);

      // Restrict movement inside clip area
      canvas.on('object:moving', (e) => {
        const obj = e.target;
        const padding = 5;

        // Clip bounds
        const clipLeft = this.clipArea.left;
        const clipTop = this.clipArea.top;
        const clipRight = clipLeft + this.clipArea.width;
        const clipBottom = clipTop + this.clipArea.height;

        // Object bounds
        const objWidth = obj.getScaledWidth();
        const objHeight = obj.getScaledHeight();

        // Prevent object from moving outside clip area
        if (obj.left < clipLeft) obj.left = clipLeft;
        if (obj.top < clipTop) obj.top = clipTop;
        if (obj.left + objWidth > clipRight) obj.left = clipRight - objWidth;
        if (obj.top + objHeight > clipBottom) obj.top = clipBottom - objHeight;
      });
    }
  }
};
</script>
