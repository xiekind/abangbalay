<template>
  <div class="upload">
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn large fab v-on="on">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card class="px-10">
          <br>
          <br>
          <v-card-text>
            <v-file-input v-model="imgs" multiple label="Upload Images" prepend-icon="mdi-camera"></v-file-input>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="handleFileUpload">Upload</v-btn>
            </v-card-actions>
          </v-card-text>
          <!-- <v-card-title>
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
          </v-card-actions>-->
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
    dialog: false,
    imgs: []
  }),
  methods: {
    Upload() {
      console.log(this.imgs);
      // axios.post("")
    },
    handleFileUpload() {
      var x = [];
      this.imgs.map(img => {
        this.encode(img).then(res => {
          x.push(res);
        });
      });
      console.log(x)
    },
    encode: async file => {
      let result_base64 = await new Promise(resolve => {
        let fileReader = new FileReader();
        fileReader.onload = e => {
          console.log(typeof e);
          resolve(fileReader.result);
        };
        fileReader.readAsDataURL(file);
      });
      return result_base64;
    }
  }
};
</script>