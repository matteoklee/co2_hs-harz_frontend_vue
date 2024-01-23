<template>
  <Faq></Faq>
</template>

<script>
import Faq from "../components/Faq.vue";
import {saveSubpage} from "../scripts/saveToSessionStorage";
import {getCurrentInstance} from "vue";
export default {
  name: "Help",
  components: { Faq },
  data(){
    return {
      startTime: 0
    }
  },
  mounted() {
    this.startTime = Date.now();
  },
  beforeUnmount() {
    saveSubpage(getCurrentInstance().type.name);
  }
}
</script>

<style scoped>

</style>