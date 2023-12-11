<template>

  <div class="min-h-[300px] flex justify-center items-center ">
    <div class="text-center m-4 p-4">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Hallo, du!
      </h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Hast du schon einmal etwas von einem CO2-Fußabdruck gehört? Nein? Das ist überhaupt nicht schlimm,
        denn Kater Bilbo ist hier, um es dir zu erklären. Also lass und loslegen!
      </p>
      <h2 class="mb-4 mt-8 text-xl text-center font-bold text-gray-900 dark:text-white">Was möchtest du tun?</h2>
      <Tutorial></Tutorial>
    </div>
  </div>


</template>

<script>
import Tutorial from "../components/Tutorial.vue";
export default {
  name: "KidsHome",
  components: {Tutorial}
}
</script>

<style scoped>

</style>