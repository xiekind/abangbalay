<!-- plugin ni siya hehe. Tanan Popup is wala pa na na integrate sa uban na mga components -->

<template>
  <div id="app">
    <mapbox
      access-token="your access token"
      :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3,
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left',
      }"
      :scale-control="{
        show: true,
        position: 'top-left',
      }"
      :fullscreen-control="{
        show: true,
        position: 'top-left',
      }"
      @map-init="mapInitialized"
    />
  </div>
</template>
 
<script>
import Mapbox from 'mapbox-gl-vue'
 
export default {
  components: { Mapbox },
  methods: {
    initialized(map) {
      const Draw = new MapboxDraw()
      map.addControl(Draw)
    },
  },
}
</script>
 
<style>
#map {
  width: 100%;
  height: 500px;
}
</style>