<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
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
