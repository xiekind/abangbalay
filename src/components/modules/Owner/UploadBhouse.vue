<template>
  <div class="upload">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn large fab v-on="on"><v-icon dark>mdi-plus</v-icon></v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Upload your boarding house</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field label="Name of your boarding house" required></v-text-field>
            <v-text-field label="Property address" hint="e.g Lapu-lapu St. Poblacion, Madridejos, Cebu"></v-text-field>

          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  data: () => ({
    dialog: false
  })
};
</script>