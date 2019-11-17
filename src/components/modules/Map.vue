<template>
  <div class="map">
    <v-row left>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn class="ma-2" color="orange darken-2" dark v-on="on">
            <v-icon dark left>mdi-pin</v-icon>Location
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="orange darken-2">
            <v-toolbar-title>Google Map</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-card>
            <v-img
              id="gmap"
              height="550px"
              src="https://i2.wp.com/www.knowcebu.com/wp-content/uploads/2016/11/tst-25.png?resize=800%2C614"
            ></v-img>
          </v-card>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<style scoped>
.map {
  margin-left: 5% !important;
}
</style>

<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
</script>