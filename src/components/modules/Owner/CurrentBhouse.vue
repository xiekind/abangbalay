<template>
  <div class="bhouseform">

        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <div id="container">
            <!-- <v-btn  large fab>
            <v-icon dark>mdi-plus</v-icon>
            </v-btn>-->
            <Upload id="uploadicon"></Upload>
          </div>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            <div>
              <v-text-field label="Name of your boarding house"></v-text-field>
              <v-text-field
                label="Property address"
                hint="Ex. Rosillos St. Nasipit Rd. Talamban, Cebu"
              ></v-text-field>
              <v-select v-model="select" :items="items" label="Rooms provided" required></v-select>
              <v-text-field label="Monthly Payment"></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="deep-purple accent-4" text @click="upload">Upload</v-btn>
            <v-btn color="deep-purple accent-4" text @click="edit">Edit</v-btn>
          </v-card-actions>
        </v-card>

  </div>
</template>

<style scoped>

.bhouseform {
  margin-right: 35% !important;
}

#container {
  padding: 15% !important;
}

#checkboxes {
  margin-top: -10% !important;
}
</style>

<script>
import Upload from "components/modules/Owner/UploadBhouse.vue";

export default {
  components: {
    Upload
  },
  data: () => ({
    loading: false,
    select: null,
    items: ["Rooms for male", "Rooms for female", "Both"]
  }),
  methods: {
    upload() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    edit(e) {
      e.preventDefault();
      console.log("sds");
    }
  }
};
</script>