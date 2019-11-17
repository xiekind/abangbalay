<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="success" dark v-on="on">
          <v-icon dark left>mdi-check</v-icon>Select
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Contact Information</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field value="Jeanilyn Tancinco" label="Owner's name"  outlined disabled></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field value="jeanilyn.tancino@gmail.com" label="Email address" outlined disabled></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field value="JeanilynTan" label="Facebook account" outlined disabled></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field value="+63912345687" label="Contact number" outlined disabled></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  color="orange darken-2" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style scoped>

</style>
<script>
export default {
  data (){
      return{
          dialog: false,
          contactForm: {
              ownername: null,
              fbacc: null,
              emailadd: null,
              number: null,
          }
      }
  }
};
</script>