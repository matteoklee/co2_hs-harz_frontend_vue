<template>


  <div id="default-carousel" class="relative w-[550px]" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-[550px] overflow-hidden rounded-lg">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out flex" data-carousel-item>
        <InfoSlide :title="title1" :content="content1"></InfoSlide>

      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out flex" data-carousel-item>
        <InfoSlide :title="title2" :content="content2"></InfoSlide>

      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out flex" data-carousel-item>
        <InfoSlide :title="title3" :content="content3"></InfoSlide>

      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out flex" data-carousel-item>
        <!-- <img src="../assets/dummy2.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> -->
        <InfoSlide :title="title4" :content="content4"></InfoSlide>
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out flex" data-carousel-item>
        <InfoSlide :title="title5" :content="content5"></InfoSlide>
      </div>

      <div class="hidden duration-700 ease-in-out flex" data-carousel-item>
        <InfoSlide :title="title6" :content="content6"></InfoSlide>
      </div>

      <div class="hidden duration-700 ease-in-out flex" data-carousel-item>
        <InfoSlide :title="title7" :content="content7"></InfoSlide>
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
      <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="6"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
  </div>

</template>

<script>
import InfoSlide from "./InfoSlide.vue";
export default {
  name: "Information",
  components: {InfoSlide},
  data() {
    return {
      title1: "Was ist CO2?",
      title2: "Warum ist CO2 wichtig?",
      title3: "Woher kommt CO2?",
      title4: "Warum ist CO2 ein Problem?",
      title5: "Welche Probleme gibt es im Harz?",
      title6: "Was wird gegen diese Probleme getan?",
      title7: "Was kann ich gegen diese Probleme tun?",
      content1: "CO2 ist die chemische Abkürzung für das Gas Kohlenstoffdioxid. Pures CO2 ist farb- und geruchlos, man kann es also nicht sehen oder riechen. (vgl. [1])",
      content2: "Menschen und Tiere atmen CO2 aus. Bäume und Pflanzen brauchen CO2 zum Leben. Sie nehmen es aus der Luft auf und wandeln es in Sauerstoff um, den die Menschen und Tiere wieder zum Leben und Atmen brauchen. So entsteht ein wichtiger Kreislauf in der Natur.",
      content3: "Von Natur aus besteht ein geringer Anteil der Luft aus CO2 (vgl. [5]). Dieser Anteil wird aber immer größer, weil der Mensch immer mehr CO2 in die Luft einbringt. Das passiert zum Beispiel durch das Verbrennen von Erdöl, Kohle oder Erdgas beim Heizen oder Autofahren. (vgl. [1])",
      content4: "Durch mehr CO2 in der Luft kommt es zum sogenannten Treibhauseffekt. Das hat zur Folge, dass sich die Erde übermäßig erwärmt, was zum Klimawandel führt (vgl. [1]). Wegen des Klimawandels verändert sich unter anderem das Wetter, was zu veränderten Temperaturen (vgl. [3], S. 13) auch im Harz führt.",
      content5: "content slide 5",
      content6: "Im Harz werden Bäume gepflanzt, die mit dem Wetter zurechtkommen. Dafür haben sich viele interessierte Menschen zusammengeschlossen. Man kann auch spenden und damit diese Menschen beim Pflanzen unterstützen. (vgl. [2])",
      content7: "Jeder kann etwas gegen den Klimawandel und dessen Folgen unternehmen. Zum Beispiel kann man öffentliche Verkehrsmitteln oder das Fahrrad nutzen, anstatt immer mit dem Auto zu fahren. Du kannst auch, anstatt mit dem Flugzeug, mit dem Zug verreisen. Aber auch das Pflanzen von Bäumen (im Harz)* kann helfen. (vgl. [3], S. 45)",
    }
  },
}
</script>

<style scoped>

</style>