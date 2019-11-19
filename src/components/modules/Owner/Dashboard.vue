<template>
    <div id="dashboard">
            <CurrentBhouse></CurrentBhouse>

    </div>
</template>


<style>

</style>

<script>
import CurrentBhouse from "components/modules/Owner/CurrentBhouse.vue";
export default {
    name: "dashboard",
    components: {
        CurrentBhouse
    }
}
</script>