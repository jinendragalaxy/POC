<template>
  <div></div>
</template>

<script>
import { fabric } from 'fabric';

export default {
  name: 'ClipArea',
  props: ['canvas'],
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

      const clipArea = new fabric.Rect({
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

      canvas.add(clipArea);
      canvas.renderAll();

      //  Emit to parent
      this.$emit('clip-ready', clipArea);
    }
  }
};
</script>
