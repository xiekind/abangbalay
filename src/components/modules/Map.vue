<template>
  <div class="map">
    <v-row left>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
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
          <iframe
            id="google"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502594.0910159778!2d123.4965569557697!3d10.22271953741475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999562ef72e51%3A0xb8357cc666cdf35c!2sSouth%20Bus%20Terminal!5e0!3m2!1sen!2sph!4v1574306591806!5m2!1sen!2sph"
            allowfullscreen="1400"
          ></iframe>
          
           <!-- <Map></Map> -->
      </v-dialog>
    </v-row>
  </div>
</template>


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

export default {
  
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },
  // components:{
  //   Map
  // },
};
</script>