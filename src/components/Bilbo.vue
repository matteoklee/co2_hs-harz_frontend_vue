<template>

  <div class="flex items-center justify-center gap-10 max-w-screen-md">
    <img class="md:w-48 md:h-72 w-24 h-48 rounded-full" src="../assets/bilbo_ohneKreis.png" alt="Kater Bilbo">
    <div class="flex flex-col w-full leading-1.5 p-4 border-gray-200 bg-gray-50 shadow-lg rounded-e-xl rounded-es-xl dark:bg-gray-700">
      <div class="flex items-center space-x-2 rtl:space-x-reverse">
        <span class="md:text-lg text-sm font-semibold text-gray-900 dark:text-white">
          Kater Bilbo
        </span>
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400"></span>
      </div>
      <p class="md:text-lg text-sm text-left font-normal py-2.5 text-gray-900 dark:text-white">
        Hallo,<br>
        ich bin Bilbo, der Hexenkater und der Harz ist mein Zuhause. Ich reise
        sehr gern und kann dir bei deinem nächsten Abenteuer helfen!
      </p>
      <span class="text-sm font-normal text-gray-500 dark:text-gray-400"></span>
      <button class="flex ml-auto mt-4 px-5 py-3 text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
        Weiter
      </button>
    </div>

  </div>



</template>

<script>
export default {
  name: "Bilbo"
}
</script>

<style scoped>

</style>