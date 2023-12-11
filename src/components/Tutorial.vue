<template>

  <div class="">
    <div class="mb-4 flex items-center justify-center">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
          <button class="inline-block p-4 rounded-md border-2" id="profile-tab" data-tabs-target="#bilbo" type="button" role="tab" aria-controls="bilbo" aria-selected="false">
            Bilbo kennenlernen
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button class="inline-block p-4 border-2 rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#co2" type="button" role="tab" aria-controls="co2" aria-selected="false">
            Mehr über CO2 erfahren
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button class="inline-block p-4 border-2 rounded-md hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#calculation" type="button" role="tab" aria-controls="calculation" aria-selected="false">
            CO2 Fußabdruck berechnen
          </button>
        </li>
      </ul>
    </div>
    <div id="default-tab-content" class="flex items-center justify-center">
      <div class="hidden p-4 px-16 rounded-lg dark:bg-gray-800" id="bilbo" role="tabpanel" aria-labelledby="profile-tab">
        <Bilbo></Bilbo>
      </div>
      <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="co2" role="tabpanel" aria-labelledby="dashboard-tab">
        <Information></Information>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="calculation" role="tabpanel" aria-labelledby="settings-tab">
        <img class="max-w-screen-md" src="../assets/result.png" alt="Result">
      </div>
    </div>

  </div>

</template>

<script>
import Bilbo from "./Bilbo.vue";
import Information from "./Information.vue";
export default {
  name: "Tutorial",
  components: {Information, Bilbo}
}
</script>

<style scoped>

</style>