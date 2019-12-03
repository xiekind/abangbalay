
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

        <!-- <mapbox
          access-token="your access token"
          :map-options="{
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-96, 37.8],
            zoom: 3
          }"
          :geolocate-control="{
            show: true,
            position: 'top-right'
          }"
          @map-load="onMapLoaded"
          @map-zoomend="zoomend"
          @map-click:points="clicked"
          @geolocate-error="geolocateError"
          @geolocate-geolocate="geolocate"
        /> -->
        <mapbox
          access-token="pk.eyJ1IjoiemllIiwiYSI6ImNrM29hZmk4NTAyc2MzcGx3Ymo0ZnRnd2MifQ.B9kN2NBQF5gq8kCNKQ2YjA"
          :map-options="{
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-96, 37.8],
            zoom: 3
          }"
          :geolocate-control="{
            show: true,
            position: 'top-right'
          }"
         
        />
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl-vue";
export default {
  components: { Mapbox,  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true
    };
  },
  methods: {
    async onMapLoaded(event) {
      const asyncAction = event.component.action;
      const action = await asyncAction.flyTo({
        center: [30, 30],
        zoom: 9,
        speed: 1
      });
      console.log(action);
      this.map = event.map;
    }
  }
};
</script>

<style>
#map {
  width: 100% !important;
  height: 91% !important;
}
</style>
