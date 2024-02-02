<template>
  <!-- <div class="flex flex-col min-h-screen bg-white"> -->
  <Navigation></Navigation>
  <!-- <Header></Header> -->
  <div v-if="isAdmin !== null">
    <div v-if="isAdmin">
      <div class="sm:ml-64">
        <div class="pt-4 flex flex-col min-h-screen">
          <p class="text-right pt-14">LOGGED IN</p>
          <router-view class="flex-grow"></router-view>
          <Footer></Footer>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="pt-4 flex flex-col min-h-screen">
        <p class="text-right pt-14">NOT LOGGED IN</p>
        <router-view class="flex-grow"></router-view>
        <Footer></Footer>
      </div>
      <!--
      <p class="text-right pt-18">NOT LOGGED IN</p>
      <div class="flex flex-col min-h-screen bg-white">
        <router-view class="flex-grow"></router-view>
        <Footer></Footer>
      </div>
      -->
    </div>
  </div>
  <div v-else>ERROR</div>
  <!--
  <div class="sm:ml-64">
    <div class="pt-4 flex flex-col min-h-screen">
      <router-view class="flex-grow"></router-view>
      <Footer></Footer>
    </div>
  </div>
  -->
  <!-- <router-view class="flex-grow"></router-view> --> <!-- bg-[url('./assets/background.jpg')]/30 -->
  <!-- <Footer></Footer> -->
  <!-- </div> -->
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {Navigation, Footer},
  data() {
    return {
      isAdmin: null
    }
  },
  mounted() {
    this.isAdmin = sessionStorage.getItem("isAdmin") === "true";
  },
}
</script>

<style scoped>

</style>
