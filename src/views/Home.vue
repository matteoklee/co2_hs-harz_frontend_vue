<template>
  <div class="min-h-[300px] flex justify-center items-center ">
    <div class="text-center m-4 p-4">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Klimafreundlich reisen mit Groß und Klein
      </h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Haben Sie sich schon einmal gefragt, wie viel CO2 Sie mit dem Auto,
        Bus oder der Bahn verbrauchen? Oder welches Verkehrsmittel die klimafreundlichste Wahl
        für Ihre nächste Reise ist? Dann können Sie sich hier einen Überblick verschaffen und ganz einfach
        den CO2-Verbrauch verschiedener Verkehrsmittel für Ihre geplante Strecke berechnen.
      </p>
      <router-link to="/calculation" class="inline-flex items-center mr-5 justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        CO2-Rechner
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </router-link>

      <router-link to="/children" class="inline-flex items-center ml-5 justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        CO2-Rechner für Kids
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import {saveSubpage} from "../scripts/saveToSessionStorage";
import {getCurrentInstance} from "vue";

export default {
  name: "Home",
  data(){
    return {
      startTime: 0
    }
  },
  mounted() {
    this.startTime = Date.now();
  },
  beforeUnmount() {
    saveSubpage(getCurrentInstance().type.name, this.startTime);
  }
}
</script>

<style scoped>

</style>