<template>
  <div class="create">
    <v-row>
      <v-card class="mx-auto" max-width="400" id="bhouse">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://usercontent1.hubstatic.com/12070308_f520.jpg"
        ></v-img>

        <v-card-title>Your Boarding House</v-card-title>
        <!-- 
      <v-card-text class="text--primary">
        <div>Madam French Home for Ladies</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>-->

        <v-card-actions>
          <Upload></Upload>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<style scoped>
#bhouse {
  margin-top: 5% !important;
  margin-left: 20% !important;
}
</style>

<script>
import Upload from "components/modules/Owner/UploadBhouse.vue"

export default {
  components: {
    Upload
  }
}
</script>