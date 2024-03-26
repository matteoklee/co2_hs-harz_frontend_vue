<template>

  <div class="flex-grow p-6 m-1 bg-green-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
    <a href="#">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
        {{ title }}
      </h5>
    </a>
    <p class="mb-3 font-normal text-gray-200 dark:text-gray-400">
      {{ content }}
    </p>

    <div class="flex justify-center items-center mt-8">
      <img src="../assets/geo.png" class="w-32 h-32" alt="Geometrie">
    </div>
    <!--
    <a href="#" class="inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Weiter
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
    -->
  </div>
</template>

<script>
export default {
  name: "InfoSlide",
  props: {
    title: String,
    content: String,
  }
}
</script>

<style scoped>

</style>