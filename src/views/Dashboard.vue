<template>
  <h1 class="text-lg text-center">Dashboard</h1>

  <div class="p-4">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 lg:block hidden">
      <div class="grid grid-cols-3 gap-4 mb-4">

        <div class="flex items-center justify-center h-auto rounded bg-gray-50 p-4">
          <AreaChart></AreaChart>
        </div>

        <div class="flex items-center justify-center h-auto rounded bg-gray-50 p-4">
          <BarChart></BarChart>
        </div>

        <div class="flex items-center justify-center h-auto rounded bg-gray-50 p-4">
          <ColumnChart></ColumnChart>
        </div>
      </div>

      <div class="flex items-center justify-center h-auto mb-4 rounded bg-gray-50 p-4">
        <LineChart></LineChart>
      </div>

      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="flex items-center justify-center rounded bg-gray-50 h-auto p-4">
          <PieChart></PieChart>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-auto p-4">
          <DonutChart></DonutChart>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-auto p-4">
          <RadialChart></RadialChart>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-auto p-4">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">
          <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
          </svg>
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
          </p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
          </p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
          </p>
        </div>
        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import AreaChart from "../components/charts/AreaChart.vue";
import BarChart from "../components/charts/BarChart.vue";
import ColumnChart from "../components/charts/ColumnChart.vue";
import LineChart from "../components/charts/LineChart.vue";
import PieChart from "../components/charts/PieChart.vue";
import DonutChart from "../components/charts/DonutChart.vue";
import RadialChart from "../components/charts/RadialChart.vue";

export default {
  name: "Dashboard",
  components: {AreaChart, BarChart, ColumnChart, LineChart, PieChart, DonutChart, RadialChart}
}
</script>

<style scoped>

</style>