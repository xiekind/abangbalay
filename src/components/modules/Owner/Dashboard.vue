<template>
  <div class="dashboard">
    <CurrentBhouse></CurrentBhouse>
    <Account></Account>

    
  </div>
</template>

<style scoped>
</style>

<script>
import CurrentBhouse from "components/modules/Owner/CurrentBhouse.vue";
import Account from "components/modules/Owner/Account.vue";

export default {
  name: "dashboard",
  components: {
    CurrentBhouse,
    Account
  }
};
</script>