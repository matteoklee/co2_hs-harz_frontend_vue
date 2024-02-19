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
  beforeUnmount() {
    saveSubpage(getCurrentInstance().type.name);
  }
}
</script>

<style scoped>

</style>