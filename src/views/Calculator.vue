<template>

  <!-- Modal toggle -->
  <div class="flex justify-center m-5">
    <button id="successButton" data-modal-target="successModal" data-modal-toggle="successModal" class="block text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="button">
      Show success message
    </button>
  </div>

  <!-- Main modal -->
  <div id="successModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
        <button type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="successModal">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
          <svg aria-hidden="true" class="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Success</span>
        </div>
        <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Successfully removed product.</p>
        <button data-modal-toggle="successModal" type="button" class="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900">
          Continue
        </button>
      </div>
    </div>
  </div>

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
  <SaveEmissionModal :isActive="isSaveEmissionModalActive" @closeModal="closeModal()"></SaveEmissionModal>



</template>

<script>
import api from "../api/api";
import Skeleton from "../components/Skeleton.vue";
import Calculation from "../components/Calculation.vue";
import UserFeedback from "../components/UserFeedback.vue";
import SaveEmissionModal from "../components/SaveEmissionModal.vue";

import {initFlowbite} from "flowbite";
export default {
  name: "Calculator",
  components: {UserFeedback, Calculation, Skeleton, SaveEmissionModal},
  data() {
    return {
      nickname:"",
      calculatedEmission: 0,

      isFeedbackActive: false,
      isSaveEmissionModalActive: false,
      isLoading: false,
    }
  },
  methods: {
    updateEmission(value) {
      this.calculatedEmission = value;
      //this.showUserFeedback();
      this.showSaveEmissionModal();
    },
    showUserFeedback() {
      this.isFeedbackActive = !this.isFeedbackActive;
      setTimeout(() => {
        this.isFeedbackActive = !this.isFeedbackActive;
      }, 6000);
    },
    showSaveEmissionModal() {
      this.isSaveEmissionModalActive = true;
      console.log("DEBUG: showSaveEmissionModal");
    },
    closeModal() {
      this.isSaveEmissionModalActive = false;
      console.log("DEBUG closeModal2");
    }
  },
  mounted() {
    initFlowbite();
    setTimeout(() => {
      //this.isLoading = false;
    }, 1000);
  },
}
</script>

<style scoped>

</style>