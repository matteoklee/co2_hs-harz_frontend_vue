<template>

  <div class="">
    <div class="mb-4 flex items-center justify-center">
      <ul class="flex flex-nowrap text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
          <button class="inline-block p-4 rounded-t-lg border-b-2" data-tabs-target="#bilbo" type="button" role="tab" aria-controls="bilbo" aria-selected="false">
            Bilbo kennenlernen
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button class="inline-block p-4 rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" data-tabs-target="#co2" type="button" role="tab" aria-controls="co2" aria-selected="false">
            Mehr über CO2 erfahren
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button class="inline-block p-4 rounded-t-lg border-b-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" data-tabs-target="#calculation" type="button" role="tab" aria-controls="calculation" aria-selected="false">
            CO2 Fußabdruck berechnen
          </button>
        </li>
      </ul>
    </div>
    <div id="default-tab-content" class="flex items-center justify-center">
      <div class="hidden p-4 px-16 rounded-lg dark:bg-gray-800" id="bilbo" role="tabpanel">
        <Bilbo></Bilbo>
      </div>
      <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="co2" role="tabpanel">
        <Information></Information>
      </div>
      <div class="hidden p-4 rounded-lg dark:bg-gray-800" id="calculation" role="tabpanel">
        <Calculation @calculatedEmission="updateEmission"></Calculation>
        {{ this.calculatedEmission }}
      </div>
    </div>

  </div>

</template>

<script>
import Bilbo from "./Bilbo.vue";
import Information from "./Information.vue";
import Calculation from "./Calculation.vue";
export default {
  name: "Tutorial",
  components: {Calculation, Information, Bilbo},
  data() {
    return {
      calculatedEmission: 0,
    }
  },
  methods: {
    updateEmission(value) {
      this.calculatedEmission = value;
    }
  }
}
</script>

<style scoped>

</style>