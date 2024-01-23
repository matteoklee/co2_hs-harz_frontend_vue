<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {onBeforeUnmount, onMounted} from "vue";

const startTime = Date.now()

onMounted(() => {
  sessionStorage.visitorTotalTime = 0;
  sessionStorage.visitorSubpages = JSON.stringify([]);
  sessionStorage.visitorButtons = JSON.stringify([]);
  console.log(sessionStorage)
});
onBeforeUnmount(() =>{
  sessionStorage.visitorTotalTime = Date.now() - startTime;
  //TODO send sessionStorage data to server
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Header></Header>
    <router-view class="flex-grow"></router-view> <!-- bg-[url('./assets/background.jpg')]/30 -->
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
