<template>
  <div class="map">
    <v-row left>
      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-buttom-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" color="orange darken-2" dark v-on="on">
            <v-icon dark left>mdi-pin</v-icon>Location
          </v-btn>
        </template>
        <v-toolbar dark color="orange darken-2">
          <v-toolbar-title>Google Map</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              icon
              dark
              @click="
                dialog = false;
                transition = 'dialog-top-transition';
              "
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <mapbox
          access-token="pk.eyJ1IjoiemllIiwiYSI6ImNrM29hZmk4NTAyc2MzcGx3Ymo0ZnRnd2MifQ.B9kN2NBQF5gq8kCNKQ2YjA"
          :map-options="{
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-96, 37.8],
            zoom: 9,
            // Map style to use
            style: 'mapbox://styles/mapbox/satellite-streets-v10'
          }"
          :geolocate-control="{
            show: true,
            position: 'top-right'

            // url: 'https://api.locationiq.com/v1/autocomplete.php?key=b672e47293ef40&q=Nasipit, Talamban Cebu City',
            // coordinates: [10.3438277, 123.91102580699]
          }"
        >
        </mapbox>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl-vue";
import MapBox from "mapbox-gl";
// import { MglMarker } from "vue-mapbox";

export default {
  components: { Mapbox },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      coordinates: [10.3438277, 123.91102580699]
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = MapBox;
  },
  methods: {
    onMapLoaded(map) {
      // const geojson = {
      //   type: "FeatureCollection",
      //   features: [
      //     {
      //       type: "Feature",
      //       geometry: {
      //         type: "Point",
      //         coordinates: [-77.032, 38.913]
      //       },
      //       properties: {
      //         title: "Mapbox",
      //         description: "Washington, D.C."
      //       }
      //     },
      //     {
      //       type: "Feature",
      //       geometry: {
      //         type: "Point",
      //         coordinates: [-122.414, 37.776]
      //       },
      //       properties: {
      //         title: "Mapbox",
      //         description: "San Francisco, California"
      //       }
      //     }
      //   ]
      // };
    console.log(map)
    },
  }
};
</script>

<style>
#map {
  width: 100% !important;
  height: 91% !important;
}
</style>
