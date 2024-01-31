<script>
import Header from "./components/Header.vue";
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
  components: {Header, Footer},
  data() {
    return {

    }
  },
  async mounted() {
    sessionStorage.clear();
    if(!sessionStorage.startTime) {
      sessionStorage.startTime = Date.now();
    }
    //window.addEventListener("beforeunload", this.handleLeaveEvent);
    //window.addEventListener("beforeunload", this.beforeunload);
    console.log("mounted...");
  },
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
    beforeunload() {
      this.handleLeaveEvent();
    }
  },
}

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
