<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import {onBeforeUnmount, onMounted} from "vue";

const startTime = Date.now()

onMounted(() => {
  console.log(sessionStorage)
});
onBeforeUnmount(() =>{
  let time = Date.now() - startTime;
  if(!sessionStorage.visitorTotalTime)
    sessionStorage.visitorTotalTime = 0;
  time += sessionStorage.visitorTotalTime;
  sessionStorage.visitorTotalTime = time;
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
