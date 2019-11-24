<template>
  <iframe>
  <h3>Map</h3>
  <div id='map'></div>
  </iframe>
</template>

<script>
import mapboxgl from 'mapbox-gl-vue'
console.dir(mapboxgl)

export default {
  data () {
    return {}
  },
  ready () {
    this.createMap()
  },
  methods: {
    createMap: function () {
      mapboxgl.accessToken = '{{yourmapboxaccestokenkey}}'
      var simple = {
        'version': 8,
        'sources': {
          'osm': {
            'type': 'vector',
            'tiles': ['https://vector.mapzen.com/osm/all/{z}/{x}/{y}.mvt?api_key=vector-tiles-{{yourmapzenapikey}}']
          }
        },
        'layers': [{
          'id': 'background',
          'type': 'background',
          'paint': {
            'background-color': '#bbccd2'
          }
        },
          {
            'id': 'majorroad',
            'source': 'osm',
            'source-layer': 'roads',
            'type': 'line'
          },
          {
            'id': 'buildings',
            'type': 'fill',
            'source': 'osm',
            'source-layer': 'buildings'
          }]
      }

      // init the map
      this.map = new mapboxgl.Map({
        container: 'map',
        style: simple,
        minzoom: 1.3,
        center: [-74.0073, 40.7124], // Manhattan
        zoom: 16
      })

      this.map.addControl(new mapboxgl.Navigation())
    }
  }
}
</script>

<style>
</style>