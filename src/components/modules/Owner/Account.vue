<template>
  <div class="account">
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
      <v-avatar color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-card-title style="color:orange ; font-size: 25px">My Account</v-card-title>
      <v-card-text>
        <div>
          <v-text-field value="Jeanilyn Tancinco" label="Name" readonly></v-text-field>
          <v-text-field value="+6312384594" label="Contact #" readonly></v-text-field>
          <v-text-field value="jeanilyntancinco@gmail.com" label="Email address" readonly></v-text-field>
          <v-text-field value="JeanilynTan" label="Facebook account" readonly></v-text-field>
          <v-text-field value="**********" label="Password" readonly></v-text-field>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple accent-4" text @click="edit">Edit</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>

#checkboxes {
  margin-top: -10% !important;
}

template{
  background-clip: red !important;
}

</style>

<script>
export default {
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