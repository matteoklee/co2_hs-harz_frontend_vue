<template>

  <nav class="bg-gray-50 border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto min-w-screen-xl sm:h-10 md:h-16 h-10">
      <router-link to="/" class="flex items-center sm:px-16 md:px-32 px-16">
        <img src="src/assets/wernigerode-logo.png" class="md:h-16 sm:h-8 h-8 p-1" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </router-link>

      <!--  -->
      <button data-collapse-toggle="mega-menu-full-dropdown" type="button" class="ml-auto border-x inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="true">
        <svg class="sm:w-5 sm:h-5 md:w-8 md:h-8 w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </button>
      <router-link to="/calculation" type="button" class="bg-green-500 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="fa-solid fa-calculator text-white sm:text-xl md:text-3xl text-xl px-1"></span>
      </router-link>
      <router-link to="/login" type="button" class="bg-green-600 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg class="sm:w-5 sm:h-5 md:w-8 md:h-8 w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
      </router-link>
      <button data-collapse-toggle="mega-menu-full-dropdown" type="button" class="bg-green-500 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-dropdown" @click="!isDropdownOpen" :aria-expanded="isDropdownOpen.toString()">
        <svg class="md:w-8 md:h-8 sm:w-4 sm:h-4 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        <span class="mx-2 md:text-xl sm:hidden hidden md:block">Menü</span>
      </button>
    </div>

    <div :class="{ 'hidden': !isDropdownOpen }" id="mega-menu-full-dropdown" class="mt-0 border-gray-200 shadow-sm bg-gay-50 border-y dark:bg-gray-800 dark:border-gray-600">
      <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul>
          <li>
            <router-link to="/" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Startseite</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
          <li>
            <router-link to="/calculation" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">CO2-Rechner</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
          <li>
            <router-link to="/children" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">CO2-Rechner für Kids</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/help" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Hilfe</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
          <li>
            <router-link to="/developer" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Entwickler</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
          <li>
            <router-link to="#" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Impressum und Datenschutz</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
import {initFlowbite} from "flowbite";
export default {
  name: "Header",
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  mounted() {
    initFlowbite();
  }
}
</script>

<style scoped>

</style>