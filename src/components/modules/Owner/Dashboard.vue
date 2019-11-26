<template>
  <div class="dashboard">
    <div>
      <CurrentBhouse></CurrentBhouse>
    </div>
  </div>
</template>

<style scoped>


</style>

<script>
import CurrentBhouse from "components/modules/Owner/CurrentBhouse.vue";

export default {
  name: "dashboard",
  components: {
    CurrentBhouse,
  }
};
</script>