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
          @map-load="loaded"
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
            zoom: 7,
            // Map style to use
            style: 'mapbox://styles/mapbox/satellite-streets-v10'
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
  components: { Mapbox },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true
    };
  },
  methods: {
    loaded(map) {
      map.addLayer({
        id: "points",
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                // type: "Feature",
                // geometry: {
                //   type: "Point",
                //   coordinates: [10.3438277, 123.91923419999999]
                // },
                // properties: {
                //   title: "Mapbox DC",
                //   icon: "monument"
                // }
              }
            ],
            proximity: {
              longitude: 10.35792355,
              latitude:  123.91102580699
            },
          }
        }
      });
    },

    zoomend() {
      console.log(`Map zoomed`);
    },
    clicked(e) {
      const title = e.features[0].properties.title;
      console.log(title);
    },
    geolocateError(control, positionError) {
      console.log(positionError);
    },
    geolocate(control, position) {
      console.log(
        `Geolocate User position: ${position.coords.latitude}, ${position.coords.longitude}`
      );
    }
  }

  //   async onMapLoaded(event) {
  //     const asyncAction = event.component.action;
  //     const action = await asyncAction.flyTo({
  //       center: [30, 30],
  //       zoom: 9,
  //       speed: 1
  //     });
  //     console.log(action);
  //     this.map = event.map;
  //   }
  // }
};
</script>

<style>
#map {
  width: 100% !important;
  height: 91% !important;
}
</style>




<!--

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
            zoom: 7,
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
  <link
    rel="stylesheet"
    href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.css"
    type="text/css"
  />
  <link
    href="https://api.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css"
    rel="stylesheet"
  />
  </div>
</template>
<script src="https://api.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.js"></script>
<script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.2.0/mapbox-gl-geocoder.min.js"></script>

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
      mapboxgl.accessToken = "pk.eyJ1IjoiemllIiwiYSI6ImNrM29hZmk4NTAyc2MzcGx3Ymo0ZnRnd2MifQ.B9kN2NBQF5gq8kCNKQ2YjA";
      var mymap = new mapboxgl.Map({
        container: "map", // Container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v10', // Map style to use
        center: [-122.25948, 37.87221], // Starting position [lng, lat]
        zoom: 12 // Starting zoom level
      });

      var marker = new mapboxgl.Marker() // Initialize a new marker
        .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
        .addTo(map); // Add the marker to the map

      var geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
        placeholder: "Search for places in Berkeley", // Placeholder text for the search bar
        bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
        proximity: {
          longitude: -122.25948,
          latitude: 37.87221
        } // Coordinates of UC Berkeley
      });

      // Add the geocoder to the map
      map.addControl(geocoder);

      // After the map style has loaded on the page,
      // add a source layer and default styling for a single point
      map.on("load", function() {
        map.addSource("single-point", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: []
          }
        });

        map.addLayer({
          id: "point",
          source: "single-point",
          type: "circle",
          paint: {
            "circle-radius": 10,
            "circle-color": "#448ee4"
          }
        });

        // Listen for the `result` event from the Geocoder
        // `result` event is triggered when a user makes a selection
        // Add a marker at the result's coordinates
        geocoder.on("result", function(ev) {
          map.getSource("single-point").setData(ev.result.geometry);
        });
      });
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

-->