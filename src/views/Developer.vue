<template>
  <Team></Team>
  <Logos></Logos>
</template>

<script>
import Team from "../components/Team.vue";
import Logos from "../components/Logos.vue";
import {saveSubpage} from "../scripts/saveToSessionStorage";
import {getCurrentInstance} from "vue";
export default {
  name: "Developer",
  components: {Logos, Team},
  beforeUnmount() {
    saveSubpage(getCurrentInstance().type.name);
  }
}
</script>

<style scoped>

</style>