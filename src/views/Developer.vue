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
  data(){
    return {
      startTime: 0
    }
  },
  mounted() {
    this.startTime = Date.now()
  },
  beforeUnmount() {
    saveSubpage(getCurrentInstance().type.name, this.startTime)
  }
}
</script>

<style scoped>

</style>