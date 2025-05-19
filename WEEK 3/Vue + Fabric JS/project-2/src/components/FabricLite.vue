<template>
  <div>
    <button @click="addRect">Rectangle</button>
    <button @click="addCircle">Circle</button>
    <button @click="clearAll">Clear All</button>
    <canvas ref="canvas1" width="600" height="400" style="border: 1px solid;"/>
  </div>
</template>

<script>
import {Canvas, Rect, Circle} from 'fabric'

export default {
    name : 'FabricLite',
    data(){
        return {fab:null}
    },
    mounted(){
        // fabric canvas initialzie
        this.fab = new Canvas(this.$refs.canvas1)

        //for background color of canvas
        this.fab.setBackgroundColor('#f9f9f9', this.rednderAll.bind(this.feb))
    },
    beforeDestroy(){
        //this is cleanup, if not than chances of memory leak
        this.fab.dispose()
    },
    methods: {
    addRect () {
      const r = new Rect({
        left: 50, top: 50, width: 120, height: 80, fill: 'lightskyblue'
      })
      this.fab.add(r)
    },
    addCircle () {
      const c = new Circle({
        left: 200, top: 100, radius: 50, fill: 'plum'
      })
      this.fab.add(c)
    },
    clearAll () {
      this.fab.clear()               // sab objects hataao
      this.fab.setBackgroundColor('#f9f9f9', this.fab.renderAll.bind(this.fab))
    }
  }
}
</script>

<style>

</style>