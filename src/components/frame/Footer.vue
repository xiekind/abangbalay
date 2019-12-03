<template>
  <div class="Footer">
    <v-footer id="foot" dark padless>
      <v-card class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Abangbalay is your one way tool for searching your ideal boarding
          houses for your long term stay

          <v-divider></v-divider>

          <strong>
            <img :src="require('@/assets/images/MyFrontLogo.png')" />
          </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>

<style scoped>
.Footer {
  margin-top: 30% !important;
  width: 100% !important;
}

img {
  width: 100px !important;
}
v-card-text {
  width: 100% !important;
}
</style>
