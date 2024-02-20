
<template>
  <!-- <div class="flex flex-col min-h-screen bg-white"> -->
  <Navigation></Navigation>
  <!-- <Header></Header> -->
  <div v-if="isAdmin !== null">
    <div v-if="isAdmin">
      <div class="sm:ml-64">
        <div class="pt-4 flex flex-col min-h-screen">
          <p class="text-right pt-14 hidden">LOGGED IN</p>
          <router-view class="flex-grow"></router-view>
          <Footer></Footer>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="pt-4 flex flex-col min-h-screen">
        <p class="text-right pt-14 hidden">NOT LOGGED IN</p>
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
//import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import api from "./api/api";

window.addEventListener("beforeunload", async function () {
  console.log("beforeunload...");
  let currentTime = Date.now();
  let startTime = sessionStorage.startTime || currentTime;
  let elapsedTime = currentTime - startTime;
  if (!sessionStorage.visitorTotalTime) {
    sessionStorage.visitorTotalTime = 0;
  }
  let totalDuration = parseInt(sessionStorage.visitorTotalTime) + elapsedTime;
  sessionStorage.visitorTotalTime = totalDuration;

  try {
    const stats = await api.sendStatistic();
    console.log(stats);
  } catch (error) {
    console.error("Error sending statistics: ", error);
  }
});

export default {
  name: "App",
  components: {Navigation, Footer},
  data() {
    return {
      isAdmin: null,
    }
  },
  mounted() {
    this.isAdmin = sessionStorage.getItem("isAdmin") === "true";
    sessionStorage.clear();
    if(!sessionStorage.startTime) {
      sessionStorage.startTime = Date.now();
    }
    //window.addEventListener("beforeunload", this.handleLeaveEvent);
    //window.addEventListener("beforeunload", this.beforeunload);
    //window.addEventListener("beforeunload", this.unload);
    console.log("mounted...");
  },
  /*
  //async beforeUnmount() {
    //window.removeEventListener("beforeunload", this.handleLeaveEvent());
  //},
  methods: {
    async handleLeaveEvent() {
      console.log("handleLeaveEvent...");
      let currentTime = Date.now();
      let startTime = sessionStorage.startTime || currentTime;
      let elapsedTime = currentTime - startTime;
      if (!sessionStorage.visitorTotalTime) {
        sessionStorage.visitorTotalTime = 0;
      }
      let totalDuration = parseInt(sessionStorage.visitorTotalTime) + elapsedTime;
      sessionStorage.visitorTotalTime = totalDuration;

      try {
        const stats = await api.sendStatistic();
        console.log(stats);
      } catch (error) {
        console.error("Error sending statistics: ", error);
      }
    },
    unload() { //beforeunload
      this.handleLeaveEvent();
    }
  },
  beforeUnmount() {
    //this.beforeunload();
  },
  deactivated() {
    //this.unload();
  }
  */
}

</script>


<style scoped>

</style>
