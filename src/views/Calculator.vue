<template>
  <section class="bg-white dark:bg-gray-800">
    <div class="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
      <h2 class="mb-4 text-4xl font-bold text-gray-900 dark:text-white text-center">CO2-Rechner</h2>
      <h2 class="mb-4 text-xl font-normal text-gray-900 dark:text-white text-center">Berechnen Sie hier die CO2-Bilanz Ihrer nächsten Reise ganz einfach anhand Ihrer geplanten Fahrtstrecke
        und des gewünschten Transportmittels.</h2>
      <h2 class="mb-4 mt-8 text-xl font-bold text-gray-900 dark:text-white">Wie und wohin wollen Sie fahren?</h2>
      <form @submit.prevent="calculateEmission" class="block bg-gray-600 p-4">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

          <div class="col-span-2 text-white flex items-center justify-end">
            <input v-model="transportMediumCustomConsumption" id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checked-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300">Verbrauch manuell eingeben?</label>
          </div>
          <div class="col-span-2 flex justify-center lg:flex-row flex-col ">
            <!-- <label for="startLocation" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start</label> -->
            <input v-model="startLocation" type="text" name="startLocation" id="startLocation" class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-600 focus:border-green-600 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Magdeburg" required="">
            <!-- <label for="endLocation" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ziel</label> -->
            <input v-model="endLocation" type="text" name="endLocation" id="endLocation" class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-600 focus:border-green-600 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Wernigerode" required="">


            <!-- <label for="transportMediumName" class="hidden block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transportmittel</label> -->
            <select v-model="transportMediumName" :onchange="resetInputs" id="transportMediumName" class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option value="default" hidden>Transportmittel auswählen</option>
              <option value="car">Auto</option>
              <option value="foot" v-if="transportMediumCustomConsumption === false" >Fuß</option>
              <option value="bike" v-if="transportMediumCustomConsumption === false" >Fahrrad</option>
              <option value="train" v-if="transportMediumCustomConsumption === false" disabled>Zug</option>
              <option value="bus_public" v-if="transportMediumCustomConsumption === false" >Linienbus</option>
              <option value="bus_tour" v-if="transportMediumCustomConsumption === false" >Reisebus</option>
            </select>


            <!-- <label for="transportMediumFuel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kraftstoff</label> -->
            <select v-model="transportMediumFuel" :onchange="resetSize" v-if="transportMediumName !== 'default' && transportMediumName !== 'foot' && transportMediumName !== 'bike' && transportMediumName !== 'bus_tour'" name="transportMediumFuel" id="transportMediumFuel" class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option value="default" hidden>Kraftstoff auswählen</option>
              <option value="1" v-if="transportMediumName !== 'bus_public'">Benzin</option>
              <option value="2">Diesel</option>
              <option value="3" v-if="transportMediumName !== 'bus_public' && transportMediumCustomConsumption === false">Hybrid-Diesel</option>
              <option value="4" v-if="transportMediumName !== 'bus_public' && transportMediumCustomConsumption === false">Hybrid-Benzin</option>
              <option value="5" v-if="transportMediumName !== 'bus_public' && transportMediumCustomConsumption === false">Elektro</option>
              <option value="6" v-if="transportMediumName !== 'car' && transportMediumCustomConsumption === false">CNG</option>
              <option value="7" v-if="transportMediumName !== 'bus_public' && transportMediumCustomConsumption === false">LPG</option>
            </select>

            <!-- <label for="transportMediumSize" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Größe</label> -->
            <select v-model="transportMediumSize" v-if="transportMediumFuel !== 'default' && transportMediumName === 'car' && transportMediumCustomConsumption === false" name="transportMediumSize" id="transportMediumSize" class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option value="default" hidden>Größe auswählen</option>
              <option value="1" v-if="transportMediumFuel !== '7'">klein</option>
              <option value="2">mittel</option>
              <option value="3" v-if="transportMediumFuel !== '5' && transportMediumFuel !== '7'">groß</option>
            </select>


            <div v-if="transportMediumCustomConsumption === true && transportMediumName !== 'default' && transportMediumFuel !== 'default'"> <!-- w-full sm:col-span-2 -->
              <!-- <label for="consumption" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verbrauch</label> -->
              <input v-model="transportMediumFuelConsumption" type="text" name="consumption" id="consumption" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="7.2" required="">
            </div>

          </div>

        </div>



        <div class="sm:col-span-2 text-white flex items-center justify-end">
          <button @click="resetForm" class="inline-flex items-center p-2 px-4 mx-2 text-sm font-medium text-center text-white bg-orange-400 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-orange-600">
            Eingaben zurücksetzen
          </button>
          <button type="submit" class="inline-flex items-center p-2 px-4 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-green-800">
            Berechnen!
          </button> <!-- bg-blue-700 -->
        </div>
      </form>

      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4">
        <div class="col-span-1 bg-green-600">
          <div class="flex justify-center items-center">
            <h2 class="my-4 text-xl font-bold text-white dark:text-white text-center">Sie verbrauchen
              <p class="my-4 text-6xl font-bold text-white dark:text-white text-center"> {{ this.calculatedEmission }} kg</p>
              CO2 mit ihrem Reiseplan.
            </h2>
          </div>
        </div>

        <div class="col-span-1">
          <img class="h-auto max-w-full" src="/src/assets/maps.png" alt="Maps">
        </div>

        <div class="col-span-1">
          <h1 class="my-2 text-lg font-bold text-black dark:text-white text-center">Ihr Verbrauch entspricht etwa der Produktion von</h1>
          <div class="flex justify-center">
            <img class="h-[64px] items-center" src="/src/assets/nutella.png" alt="Nutella">
          </div>
          <h1 class="my-4 text-lg font-bold text-black dark:text-white text-center">
            <p class="my-2 text-4xl font-bold text-green-500 dark:text-white text-center">11</p>Nutellagläsern.
          </h1>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import api from "../api/api";
export default {
  name: "Calculator",
  data() {
    return {
      nickname:"",
      startLocation: "",
      endLocation: "",
      transportMediumName: "default",
      transportMediumSize: "default",
      transportMediumFuel: "default",
      calculatedEmission: 0,
      transportMediumFuelConsumption: undefined,
      transportMediumCustomConsumption: false,
    }
  },
  methods: {
    resetForm(){
      this.startLocation = "";
      this.endLocation = "";
      this.transportMediumName = "default";
      this.resetInputs();
      this.calculatedEmission = 0;
      this.transportMediumFuelConsumption = undefined;
      this.transportMediumCustomConsumption = false;
    },
    resetInputs(){
      this.resetFuel();
      this.resetSize();
    },
    resetSize(){
      this.transportMediumSize = "default";
    },
    resetFuel(){
      this.transportMediumFuel = "default";
    },

    dummy() {

    },

    async calculateEmission() {
      if(!this.startLocation || !this.endLocation) {
        console.error("startLocation and endLocation must not be empty.")
      }
      const start = this.startLocation;
      const end = this.endLocation;
      if(!this.transportMediumName || this.transportMediumName === "default") {
        console.error("transportMediumName must not be null.");
      }
      const transportMedium = {
        "transportMediumName": this.transportMediumName,
        "transportMediumSize": this.transportMediumSize,
        "transportMediumFuel": this.transportMediumFuel
      };
      if(this.transportMediumFuelConsumption) {
        transportMedium["transportMediumFuelConsumption"] = this.transportMediumFuelConsumption;
      }
      console.log(transportMedium);
      try {
        const emission = await api.calculateEmission(start, end, transportMedium);
        this.calculatedEmission = emission.toFixed(3);
        const savedEmission = await this.saveEmission(start, end, transportMedium, emission, "DieAtzen", "Marko", 3)
        console.log(savedEmission);
      } catch (error) {
        console.error("Error calculating emission: ", error);
      }

    },
    async saveEmission(start, end, transportMedium, emission, nickname, passphrase, size) {
      const group = {
        "groupEmission": emission,
        "groupEmissionNickName": nickname,
        "groupEmissionPassPhrase": passphrase,
        "groupEmissionSize": size
      };
      try {
        return await api.saveEmission(start, end, transportMedium, group);
      } catch (error) {
        console.error("Error saving emission: ", error);
      }

    }
  },
  mounted() {
  },
}
</script>

<style scoped>

</style>