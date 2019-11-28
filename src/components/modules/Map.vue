<template>
  <div class="map">
    <v-row left>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-buttom-transition">
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" color="orange darken-2" dark v-on="on">
            <v-icon dark left>mdi-pin</v-icon>Location
          </v-btn>
        </template>

        <v-toolbar dark color="orange darken-2">
          <v-toolbar-title>Google Map</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

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
          @map-load="loaded"
          @map-zoomend="zoomend"
          @map-click:points="clicked"
          @geolocate-error="geolocateError"
          @geolocate-geolocate="geolocate"
        />
        <!-- <mapbox
          access-token="your access token"
          :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3,
      }"
        />-->

        <!-- <iframe
          id="google"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502594.0910159778!2d123.4965569557697!3d10.22271953741475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999562ef72e51%3A0xb8357cc666cdf35c!2sSouth%20Bus%20Terminal!5e0!3m2!1sen!2sph!4v1574306591806!5m2!1sen!2sph"
          allowfullscreen="1400"
        ></iframe>-->

        <!-- This is the MAP  -->
        <!-- <template>
          <MglMap :mapStyle.sync="mapStyle">
           <MglNavigationControl position="top-right" />
            <MglGeolocateControl position="top-right" />
            <MglPopup :coordinates="popupCoordinates">
              <span>Hello map!</span>
            </MglPopup>
          </MglMap>
           <MglMap
              :mapboxGl="mapbox-gl"
              :accessToken="accessToken"
              :mapStyle.sync="mapStyle"
              @load="onMapLoaded"
            /> 
        </template>-->
        <!-- This is where the MAP ENDS -->
      </v-dialog>
    </v-row>
  </div>
</template>


<script>
import Mapbox from "mapbox-gl-vue";

export default {
  components: { Mapbox },
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
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-77.03238901390978, 38.913188059745586]
                },
                properties: {
                  title: "Mapbox DC",
                  icon: "monument"
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-122.414, 37.776]
                },
                properties: {
                  title: "Mapbox SF",
                  icon: "harbor"
                }
              }
            ]
          }
        },
        layout: {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });
    },
    zoomend() {
      console.log("Map zoomed");
    },
    // zoomend( e) {
    //   console.log('Map zoomed')
    // },
    clicked(e) {
      const title = e.features[0].properties.title;
      console.log(title);
    },
    // zoomend(map, e) {
    //   console.log('Map zoomed')
    // },
    // clicked(map, e) {
    //   const title = e.features[0].properties.title
    //   console.log(title)
    // },
    geolocateError(control, positionError) {
      console.log(positionError);
    },
    geolocate(control, position) {
      console.log(
        `User position: ${position.coords.latitude}, ${
          position.coords.longitude
        }`
      );
    }
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 550px;
}
</style>
-->
<!--
<style scoped>
#google {
  height: 100% !important;
  width: 100% !important;
}
.map {
  margin-left: 5% !important;
}
</style>

<script>
// import Map from 'components/modules/Mapbox.vue';
import Mapbox from "mapbox-gl";
import { MglMap, MglPopup } from "vue-mapbox";
export default {
  components: {
    // Mapbox,
    MglMap,
    MglPopup
  },
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      // accessToken: "token_here",
      props: {
        mapStyle: {type : String, required: true}
      },
      popupCoordinates: [10, 10]
    };
  },
  created() {
    // this.map = null;
    this.mapbox = Mapbox;
  },
  methods: {
    // onMapLoaded() {
    //   // in the component
    //   this.map = event.map;
    //   // // or if you want to store the map
    //   // this.$store.map = event.map;
    // }
    async onMapLoaded(event) {
      // catching the load map event
      const asyncActions = event.component.actions;
      const newParams = await asyncActions.flyto({
        center: [30, 30],
        zoom: 9,
        speed: 1
      });
      console.log(newParams);
    }
  }
};
</script>
-->
