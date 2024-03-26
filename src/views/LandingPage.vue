<template>
  <section id="top" class="overflow-auto h-screen">
    <div class="lg:grid lg:grid-cols-2 gap-16 px-4 mx-auto max-w-screen-2xl py-16 lg:px-6 min-h-screen">
      <div class="flex flex-col justify-center">
        <h2 class="lg:mb-8 mb-2 lg:text-8xl text-4xl font-bold text-green-500">CO²-Rechner</h2>
        <h2 class="lg:mb-8 mb-4 lg:text-5xl text-2xl font-thin">Wernigerode Tourismus GmbH</h2>
        <p class="lg:mb-8 lg:text-2xl mb-4 text-base">Haben Sie sich schon einmal gefragt, wie viel CO2 Sie mit dem
          Auto, Bus oder der Bahn verbrauchen? Oder welches
          Verkehrsmittel die klimafreundlichste Wahl für Ihre nächste Reise
          ist? Dann können Sie sich hier einen Überblick verschaffen und
          ganz einfach den CO2-Verbrauch verschiedener Verkehrsmittel für
          Ihre geplante Strecke berechnen.</p>
        <div>
          <router-link
              class="inline-flex items-center justify-center px-6 py-4 mb-4 text-2xl font-bold text-center text-white bg-green-500 rounded-lg hover:bg-green-800"
              to="/calculation">
            CO2-Rechner
            <svg aria-hidden="true" class="w-3.5 h-3.5 ms-4" fill="none" viewBox="0 0 14 10"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
          </router-link>
        </div>
        <div>
          <router-link
              class="inline-flex items-center justify-center px-6 py-4 mb-4 text-2xl font-bold text-center text-white bg-green-500 rounded-lg hover:bg-green-800"
              to="/children">
            CO2-Rechner für Kids
            <svg aria-hidden="true" class="w-3.5 h-3.5 ms-2 rtl:rotate-180" fill="none"
                 viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2"/>
            </svg>
          </router-link>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center mt-10 relative">
        <svg class="fill-zinc-300 lg:w-2/3 w-1/3" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
              d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM96 64H288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/>
        </svg>
        <!-- <img alt="calculator" class="hidden lg:block absolute bottom-5" src="/src/assets/img.png"> --> <!-- -inset-x-1/4 -->
      </div>
    </div>
  </section>

  <section id="calc1" class="min-h-screen border border-t bg-gray-200">
    <div class="mt-12 pt-12 max-w-screen-xl mx-auto">
      <h2 class="lg:mb-8 mb-2 lg:text-6xl text-4xl font-bold text-center">CO²-Emissionen berechnen</h2>
      <h2 class="lg:mb-8 mb-4 lg:text-2xl text-2xl font-thin text-center">Berechnen Sie hier die CO²-Bilanz Ihrer
        nächsten Reise ganz
        einfach anhand Ihrer geplanten Fahrtstrecke und des gewünschten Transportmittels.</h2>
    </div>

    <div class="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-4 mx-auto max-w-screen-2xl py-4 px-6">
      <div class="col-span-2 mt-4">
        <CalculationNew class="bg-white"></CalculationNew>
      </div>
      <div class="my-4 bg-green-500 py-4 flex flex-col justify-center items-center lg:col-span-1 col-span-2 h-3/4">
        <p class="text-white font-bold text-4xl text-center py-4">Sie verbrauchen</p>
        <p class="text-white font-bold text-8xl text-center py-4">13.37 kg</p>
        <p class="text-white font-bold text-4xl text-center py-4">CO² mit Ihrem Reiseplan.</p>
      </div>
      <div class="my-4 lg:col-span-1 col-span-2 h-3/4 mx-auto">
        <img alt="maps" class="rounded-lg h-full" src="/src/assets/maps.png"> <!-- -inset-x-1/4 -->
      </div>
    </div>
  </section>

  <section id="calc2" class="min-h-screen border border-t"><!-- bg-neutral-200 -->
    <div class="mt-12 pt-12 max-w-screen-xl mx-auto">
      <h2 class="lg:mb-8 mb-2 lg:text-6xl text-4xl font-bold text-center">CO²-Emissionen berechnen</h2>
      <h2 class="lg:mb-8 mb-4 lg:text-2xl text-2xl font-thin text-center">Berechnen Sie hier die CO²-Bilanz Ihrer
        nächsten Reise ganz
        einfach anhand Ihrer geplanten Fahrtstrecke und des gewünschten Transportmittels.</h2>
    </div>

    <div class="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-4 mx-auto max-w-screen-2xl py-4 px-6 items-center">
      <div class="col-span-1 mt-4 w-3/4 mx-auto">
        <CalculationNew class="bg-white"></CalculationNew>
      </div>
      <div class="mt-4 py-10 w-3/4 mx-auto">
        <p class="font-bold text-4xl text-center">Sie verbrauchen</p>
        <p class="font-bold text-8xl text-center py-4 text-green-700">13.37 kg</p>
        <p class="font-bold text-4xl text-center">CO² mit Ihrem Reiseplan.</p>
      </div>
    </div>
  </section>

  <section id="calc2" class="min-h-screen border border-t bg-gray-200">
    <div class="mt-12 pt-12 max-w-screen-xl mx-auto">
      <h2 class="lg:mb-8 mb-2 lg:text-6xl text-4xl font-bold text-center">CO² Auswertung</h2>
      <h2 class="lg:mb-8 mb-4 lg:text-2xl text-2xl font-thin text-center">Lorem Ipsum<br>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
        et dolore magna aliquyam erat, sed diam voluptua.
      </h2>
    </div>

    <div class="lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4 mx-auto max-w-screen-2xl py-4 px-6">
      <div class="col-span-2 mt-4 mx-auto shadow-lg rounded-lg bg-white w-full h-48">
      </div>
      <div class="col-span-1 mt-4 mx-auto shadow-lg rounded-lg bg-white w-full h-48">
      </div>
      <div class="col-span-1 mt-4 mx-auto shadow-lg rounded-lg bg-white w-full h-48">
      </div>
      <div class="col-span-2 mt-4 mx-auto shadow-lg rounded-lg bg-white w-full h-48">
      </div>
    </div>
  </section>

  <section id="calc2" class="min-h-screen border border-t border-gray-200">
    <div class="mt-12 pt-12 max-w-screen-xl mx-auto">
      <h2 class="lg:mb-8 mb-2 lg:text-6xl text-4xl font-bold text-center">CO² erklärt...</h2>
      <h2 class="lg:mb-8 mb-4 lg:text-2xl text-2xl font-thin text-center">Hallo du!<br>
        Hast du schon einmal etwas von einem CO²-Fußabdruck gehört? Nein?
        Das ist überhaupt nicht schlimm, denn die Brockenbande ist hier, um es dir zu erklären. Also lass und loslegen!
      </h2>
    </div>

    <div class="lg:grid lg:grid-cols-2 grid grid-cols-1 gap-4 mx-auto max-w-screen-2xl py-4 px-6">
      <div class="col-span-1 mt-4 mx-auto">
        <img alt="brockenbande" class="" src="/src/assets/01a-Brockenbande_ohneschatten-col-bearbeitet.png">
        <!-- -inset-x-1/4 -->
      </div>
      <div class="mt-4 py-10">
        <Information></Information>
      </div>
    </div>
  </section>

  <section id="help" class="min-h-screen border border-t">
    <div class="mt-12 pt-12 hidden">
      <h2 class="lg:mb-8 mb-2 lg:text-6xl text-4xl font-bold text-center">Hilfe und Tipps</h2>
      <h2 class="lg:mb-8 mb-4 lg:text-2xl text-2xl font-thin text-center">Die häufigsten Fraggen rund ums Thema CO²
        und der Berechnung von CO²-Emissionen.</h2>
    </div>
    <div class="flex flex-col justify-center items-center my-16">
      <Faq></Faq>
    </div>
  </section>

  <section id="team" class="min-h-screen border border-t bg-gray-200">
    <div class="mt-12 pt-12 hidden">
      <h2 class="lg:mb-8 mb-2 lg:text-6xl text-4xl font-bold text-center">Hilfe und Tipps</h2>
      <h2 class="lg:mb-8 mb-4 lg:text-2xl text-2xl font-thin text-center">Die häufigsten Fraggen rund ums Thema CO²
        und der Berechnung von CO²-Emissionen.</h2>
    </div>
    <div class="flex flex-col justify-center items-center my-16">
      <Team class=""></Team>
    </div>
  </section>

  <a ref="scrollTopButton" class="hidden fixed z-50 bottom-10 right-10 p-4 border-0 w-14 h-14 rounded-full shadow-lg bg-green-500 hover:bg-green-700 text-white text-lg font-semibold transition-colors duration-300" href="#top"
     title="Go To Top">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z"/>
    </svg>
    <span class="sr-only">Go to top</span>
  </a>

</template>

<script>
import CalculationNew from "../components/CalculationNew.vue";
import Faq from "../components/Faq.vue";
import Team from "../components/Team.vue";
import Information from "../components/Information.vue";

export default {
  name: "LandingPage",
  components: {Information, Team, Faq, CalculationNew,},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollButton = this.$refs.scrollTopButton;

      if (window.scrollY > 500) {
        scrollButton.classList.remove("hidden");
      } else {
        scrollButton.classList.add("hidden");
      }
    }
  }
}
</script>

<style scoped>

</style>