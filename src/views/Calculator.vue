<template>
  <section class="bg-white dark:bg-gray-800">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <Skeleton :isActive="isLoading"></Skeleton>
      <div v-if="!isLoading">
        <h2 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white text-center">CO2-Rechner</h2>
        <h2 class="mb-4 text-xl font-normal text-gray-900 dark:text-white text-center">Berechnen Sie hier die CO2-Bilanz Ihrer nächsten Reise ganz einfach anhand Ihrer geplanten Fahrtstrecke
          und des gewünschten Transportmittels.</h2>
        <h2 class="mb-4 mt-8 text-xl font-bold text-gray-900 dark:text-white">Wie und wohin wollen Sie fahren?</h2>

        <Calculation @calculatedEmission="updateEmission"></Calculation>

        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4">
          <div class="col-span-1 bg-green-600 flex justify-center items-center">
            <h2 class="my-4 text-xl font-bold text-white dark:text-white text-center">Sie verbrauchen
              <p class="my-4 text-6xl font-bold text-white dark:text-white text-center"> {{ this.calculatedEmission }} kg</p>
              CO2 mit ihrem Reiseplan.
            </h2>
          </div>

          <div class="col-span-1">
            <img class="h-auto max-w-full" src="/src/assets/maps.png" alt="Maps">
          </div>

          <div class="col-span-1 flex flex-col justify-center items-center">
            <h1 class="my-2 text-lg font-bold text-black dark:text-white text-center">Ihr Verbrauch entspricht etwa der Produktion von</h1>
            <img class="h-[64px]" src="/src/assets/nutella.png" alt="Nutella">
            <h1 class="my-2 text-lg font-bold text-black dark:text-white text-center">
              <p class="my-2 text-4xl font-bold text-green-500 dark:text-white text-center">11</p>
              Nutellagläsern.
            </h1>
          </div>
        </div>
      </div>
    </div>
  </section>

  <UserFeedback :isActive="isFeedbackActive"></UserFeedback>
</template>

<script>
import api from "../api/api";
import Skeleton from "../components/Skeleton.vue";
import Calculation from "../components/Calculation.vue";
import UserFeedback from "../components/UserFeedback.vue";
export default {
  name: "Calculator",
  components: {UserFeedback, Calculation, Skeleton},
  data() {
    return {
      nickname:"",
      calculatedEmission: 0,
      isFeedbackActive: false,
      isLoading: true,
    }
  },
  methods: {
    updateEmission(value) {
      this.calculatedEmission = value;
      this.showUserFeedback();
    },
    showUserFeedback() {
      this.isFeedbackActive = !this.isFeedbackActive;
      setTimeout(() => {
        this.isFeedbackActive = !this.isFeedbackActive;
      }, 6000);
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
}
</script>

<style scoped>

</style>