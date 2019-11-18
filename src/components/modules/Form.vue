<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400px">
      <template v-slot:activator="{ on }">
        <v-btn color="success" dark v-on="on">
          <v-icon dark left>mdi-check</v-icon>Select
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Contact Information</span>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col  md="6">
                <p1 v-model="contactForm.ownername">Jeanilyn Tancinco</p1>
              </v-col>
            </v-row>
            <v-row>
              <v-col  md="6">
                <p1 v-model="contactForm.ownername">jeanilyntancinco@gmail.com</p1>
              </v-col>
            </v-row>
            <v-row>
              <v-col  md="6">
                <p1 v-model="contactForm.ownername">https://facebook.com/jeantancino15</p1>
              </v-col>
            </v-row>
            <v-row>
              <v-col  md="6">
                <p1 v-model="contactForm.ownername">+63945123465</p1>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="orange darken-2" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <!-- <div>
  <b-button v-b-modal.modal-center>Select</b-button>

  <b-modal id="modal-center" centered title="BootstrapVue">
    <p class="my-4">Vertically centered modal!</p>
  </b-modal>
  </div>-->
</template>

<style scoped>
</style>
<script>
export default {
  data() {
    return {
      dialog: false,
      contactForm: {
        ownername: null,
        fbacc: null,
        emailadd: null,
        number: null
      }
    };
  }
};
</script>