<template>

  <nav class="fixed top-0 z-40 w-full bg-white border-b border-gray-200">
    <div class="flex flex-wrap justify-between items-center mx-auto min-w-screen-xl sm:h-10 md:h-16 h-10">
      <router-link to="/" class="flex items-center sm:px-8 md:px-32 px-8">
        <img src="src/assets/wernigerode-logo.png" class="md:h-16 sm:h-8 h-8 p-1" alt="Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </router-link>

      <!-- data-collapse-toggle="mega-menu-full-dropdown" -->
      <router-link to="/landing" type="button"
                   class="ml-auto border-x inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-100 focus:outline-none">
        <svg class="sm:w-5 sm:h-5 md:w-8 md:h-8 w-5 h-5 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
        </svg>
      </router-link>

      <a href="#team" type="button" class="bg-green-500 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="fa-solid fa-users text-white sm:text-xl md:text-3xl text-xl px-1"></span>
      </a>
      <a href="#team" type="button" class="bg-green-600 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="fa-solid fa-building-columns text-white sm:text-xl md:text-3xl text-xl px-1"></span>
      </a>
      <a href="#help" type="button" class="bg-green-500 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="fa-solid fa-question text-white sm:text-xl md:text-3xl text-xl px-1"></span>
      </a>

      <a href="#calc1" type="button" class="bg-green-600 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="fa-solid fa-calculator text-white sm:text-xl md:text-3xl text-xl px-1"></span>
      </a>

      <router-link to="/calculation" type="button" class="bg-green-500 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="fa-solid fa-calculator text-white sm:text-xl md:text-3xl text-xl px-1"></span>
      </router-link>
      <!-- to="/login" -->
      <router-link to="/" type="button" class="bg-green-600 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg class="sm:w-5 sm:h-5 md:w-8 md:h-8 w-5 h-5 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
      </router-link>
      <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" type="button" class="bg-green-500 inline-flex items-center px-4 w-auto h-full justify-center text-sm text-white hover:bg-green-900 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu-full-dropdown" @click="toggleDropdown" aria-hidden="true">
        <svg class="md:w-8 md:h-8 sm:w-4 sm:h-4 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        <span class="mx-2 md:text-xl sm:hidden hidden md:block">Menü</span>
      </button>
    </div>

    <!-- :class="{ 'hidden': !isDropdownOpen }" -->
    <div :class="{ 'hidden': !isDropdownOpen }" id="mega-menu-full-dropdown" class="mt-0 border-gray-200 shadow-sm bg-gay-50 border-y dark:bg-gray-800 dark:border-gray-600">
      <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
        <ul>
          <li>
            <router-link to="/" @click="closeDropdown" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Startseite</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
          <li>
            <router-link to="/calculation" @click="closeDropdown" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">CO2-Rechner</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
          <li>
            <router-link to="/children" @click="closeDropdown" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">CO2-Rechner für Kids</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to="/help" @click="closeDropdown" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Hilfe</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
          <li>
            <!-- to="/developer" -->
            <router-link to="/" @click="closeDropdown" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Entwickler</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
          <li>
            <router-link to="#" @click="closeDropdown" class="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="font-semibold">Impressum und Datenschutz</div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <Sidebar v-if="isAdmin"></Sidebar>
</template>

<script>
import Sidebar from "./Sidebar.vue";

import {initFlowbite} from "flowbite";
export default {
  name: "Navigation",
  components: {Sidebar},
  data() {
    return {
      isAdmin: false,
      isDropdownOpen: false,
    }
  },
  methods: {
    closeDropdown() {
      if(this.isDropdownOpen) {
        this.isDropdownOpen = false;
      }
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  },
  mounted() {
    initFlowbite();
    this.isAdmin = sessionStorage.getItem("isAdmin") === "true";
  }
}
</script>

<style scoped>

</style>