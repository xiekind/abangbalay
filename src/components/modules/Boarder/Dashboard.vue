<template>
<v-container fluid>
  <v-row>
    <v-card id="card"
    class="mx-auto"
    max-width="400"
  >


<v-card-title></v-card-title>
    <v-card-text class="text--primary">
      <v-btn><v-icon>mdi-camera</v-icon></v-btn>
      
    </v-card-text>

  </v-card>
  </v-row>
</v-container>
</template>


<style>
  #card{
    margin-top: 10% !important;
  }
</style>

<script>
  export default {
    data: () => ({
      rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
    }),
  }
</script>