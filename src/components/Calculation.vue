<template>


  <form @submit.prevent="calculateEmission()" class="block p-4 border shadow"> <!-- bg-gray-600 -->
    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
      <div class="col-span-2 text-white flex items-center justify-end">
        <!--
        <input v-model="transportMediumCustomConsumption" @click="resetForm" type="checkbox" value="" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="checked-checkbox" class="ms-2 text-sm font-medium dark:text-gray-300">Verbrauch manuell eingeben?</label>
        -->
        <label class="relative inline-flex items-center cursor-pointer">
          <input v-model="transportMediumCustomConsumption" @click="resetForm" type="checkbox" value="" class="sr-only peer">
          <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-500 dark:text-gray-300">Verbrauch manuell eingeben?</span>
        </label>
      </div>

      <div class="col-span-2 flex justify-center lg:flex-row flex-col ">
        <div class="relative">
          <input v-model="startLocation" type="text" name="startLocation" id="startLocation" class="pl-10 rounded-lg lg:w-auto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-600 focus:border-green-600 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Magdeburg" required="">
          <div class="absolute inset-y-4 start-0 top-0 flex items-center ps-3.5 pt-0 pointer-events-none">
            <i class="fa-solid fa-location-dot"></i>
          </div>
        </div>
        <div class="relative">
          <input v-model="endLocation" type="text" name="endLocation" id="endLocation" class="pl-10 rounded-lg lg:w-auto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-600 focus:border-green-600 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Wernigerode" required="">
          <div class="absolute inset-y-4 start-0 top-0 flex items-center ps-3.5 pt-0 pointer-events-none">
            <i class="fa-solid fa-location-dot"></i>
          </div>
        </div>

        <!--
        <input v-model="startLocation" type="text" name="startLocation" id="startLocation" class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-600 focus:border-green-600 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Magdeburg" required="">
        <input v-model="endLocation" type="text" name="endLocation" id="endLocation" class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-600 focus:border-green-600 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Wernigerode" required="">
        -->
        <div class="relative">
          <select v-model="transportMediumName" :onchange="resetInputs" id="transportMediumName"
                  class="pl-10 rounded-lg lg:w-auto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option v-for="option in getTransportMediumNames()"
                    :key="option.value"
                    :value="option.value"
                    :disabled="option.disabled">
              {{ option.label }}
            </option>
          </select>
          <div class="absolute inset-y-4 start-0 top-0 flex items-center ps-3.5 pt-0 pointer-events-none">
            <i class="fa-solid fa-car"></i>
          </div>
        </div>
        <!--
        <select v-model="transportMediumName" :onchange="resetInputs" id="transportMediumName"
                class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option v-for="option in getTransportMediumNames()"
                  :key="option.value"
                  :value="option.value"
                  :disabled="option.disabled">
            {{ option.label }}
          </option>

        </select>
        -->
        <div class="relative" v-if="isTransportMediumFuelAvailable()">
          <select v-model="transportMediumFuel" :onchange="resetSize" name="transportMediumFuel" id="transportMediumFuel"
                  class="pl-10 rounded-lg lg:w-auto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option v-for="option in getTransportMediumFuels()"
                    :key="option.value"
                    :value="option.value"
                    :disabled="option.disabled">
              {{ option.label }}
            </option>
          </select>
          <div class="absolute inset-y-4 start-0 top-0 flex items-center ps-3.5 pt-0 pointer-events-none">
            <i class="fa-solid fa-gas-pump"></i>
          </div>
        </div>
        <!--
        <select v-model="transportMediumFuel" :onchange="resetSize" v-if="isTransportMediumFuelAvailable()" name="transportMediumFuel" id="transportMediumFuel"
                class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option v-for="option in getTransportMediumFuels()"
                  :key="option.value"
                  :value="option.value"
                  :disabled="option.disabled">
            {{ option.label }}
          </option>
        </select>
        -->
        <div class="relative" v-if="isTransportMediumSizeAvailable()">
          <select v-model="transportMediumSize"  name="transportMediumSize" id="transportMediumSize"
                  class="pl-10 rounded-lg  lg:w-auto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
            <option v-for="option in getTransportMediumSizes()"
                    :key="option.value"
                    :value="option.value"
                    :disabled="option.disabled">
              {{ option.label }}
            </option>
          </select>
          <div class="absolute inset-y-4 start-0 top-0 flex items-center ps-3.5 pt-0 pointer-events-none">
            <i class="fa-solid fa-up-down"></i>
          </div>
        </div>
        <!--
        <select v-model="transportMediumSize" v-if="isTransportMediumSizeAvailable()" name="transportMediumSize" id="transportMediumSize"
                class="rounded-lg w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
          <option v-for="option in getTransportMediumSizes()"
                  :key="option.value"
                  :value="option.value"
                  :disabled="option.disabled">
            {{ option.label }}
          </option>
        </select>
        -->
        <div class="relative" v-if="isTransportMediumFuelConsumptionAvailable()">
          <input v-model="transportMediumFuelConsumption" type="text" name="consumption" id="consumption"
                 class="pl-10 rounded-lg lg:w-auto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-600 focus:border-green-600 mb-4 me-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="7.2" required="">
          <div class="absolute inset-y-4 start-0 top-0 flex items-center ps-3.5 pt-0 pointer-events-none">
            <i class="fa-solid fa-percent"></i>
          </div>
        </div>
        <!--
        <div v-if="isTransportMediumFuelConsumptionAvailable()">
          <input v-model="transportMediumFuelConsumption" type="text" name="consumption" id="consumption" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="7.2" required="">
        </div>
        -->
      </div>
    </div>

    <div class="sm:col-span-2 text-white flex items-center justify-end">
      <button @click="resetForm" class="inline-flex items-center p-2 px-4 mx-2 text-sm font-medium border text-center text-gray-500 bg-white hover:bg-gray-100 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:text-gray-900">
        Eingaben zurücksetzen
      </button>
      <button type="submit" class="inline-flex items-center p-2 px-4 text-sm font-medium text-center text-white bg-green-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-green-800">
        Berechnen!
      </button>
    </div>
  </form>

</template>

<script>
import api from "../api/api";
import SaveEmissionModal from "./SaveEmissionModal.vue";

export default {
  name: "Calculation",
  components: {SaveEmissionModal},
  data() {
    return {
      startLocation: "",
      endLocation: "",
      transportMediumName: "default",
      transportMediumSize: "default",
      transportMediumFuel: "default",
      calculatedEmission: 0,
      transportMediumFuelConsumption: 0,
      transportMediumCustomConsumption: false,
    }
  },
  methods: {
    resetForm(){
      this.startLocation = "";
      this.endLocation = "";
      this.resetName();
      this.resetInputs();
      this.calculatedEmission = 0;
      this.transportMediumFuelConsumption = undefined;
      this.transportMediumCustomConsumption = false;
    },
    resetInputs(){
      this.resetFuel();
      this.resetSize();
    },
    resetName() {
      this.transportMediumName = "default";
    },
    resetSize(){
      this.transportMediumSize = "default";
    },
    resetFuel(){
      this.transportMediumFuel = "default";
    },
    /** OPTIONS **/
    getTransportMediumNames() {
      const options = [
        { value: "default", label: "Transportmittel", disabled: true },
        { value: "car", label: "Auto", disabled: false },
      ];
      if(this.transportMediumCustomConsumption === false) {
        options.push({ value: "foot", label: "Fuß", disabled: false });
        options.push({ value: "bike", label: "Fahrrad", disabled: false });
        options.push({ value: "train", label: "Zug", disabled: true });
        options.push({ value: "bus_public", label: "Linienbus", disabled: false });
        options.push({ value: "bus_tour", label: "Reisebus", disabled: false });
      };
      return options;
    },
    getTransportMediumFuels() {
      const options = [
        { value: "default", label: "Kraftstoff", disabled: true },
        { value: "2", label: "Diesel", disabled: false },
      ];

      if(this.transportMediumName !== 'bus_public') {
        options.push({ value: "1", label: "Benzin", disabled: false });
        if(this.transportMediumCustomConsumption === false) {
          options.push({ value: "3", label: "Hybrid-Diesel", disabled: false });
          options.push({ value: "4", label: "Hybrid-Benzin", disabled: false });
          options.push({ value: "5", label: "Elektro", disabled: false });
          options.push({ value: "7", label: "LPG", disabled: false });
        }
      }
      if(this.transportMediumName !== 'car' && this.transportMediumCustomConsumption === false) {
        options.push({ value: "6", label: "CNG", disabled: false });
      }

      return options;
    },
    getTransportMediumSizes() {
      const options = [
        { value: "default", label: "Größe", disabled: true },
        { value: "2", label: "mittel", disabled: false },
      ];
      if(this.transportMediumFuel !== '7') {
        options.push({ value: "1", label: "klein", disabled: false });
        if(this.transportMediumFuel !== '5') options.push({ value: "3", label: "groß", disabled: false });
      }
      return options;
    },
    isTransportMediumFuelAvailable() {
      //transportMediumName !== 'default' && transportMediumName !== 'foot' && transportMediumName !== 'bike' && transportMediumName !== 'bus_tour'
      const unavailableFuelInputs = ["default", "foot", "bike", "bus_tour"];
      return !unavailableFuelInputs.includes(this.transportMediumName.toLowerCase());
    },
    isTransportMediumSizeAvailable() {
      return this.transportMediumFuel !== 'default' && this.transportMediumName === 'car' && this.transportMediumCustomConsumption === false;
    },
    isTransportMediumFuelConsumptionAvailable() {
      return this.transportMediumCustomConsumption === true && this.transportMediumName !== 'default' && this.transportMediumFuel !== 'default';
    },
    validateInput() {
      if(this.startLocation && this.endLocation) {
        if(this.transportMediumName !== 'default') {
          if(this.isTransportMediumSizeAvailable()) {
            return this.transportMediumSize !== 'default';
          }
          if(this.isTransportMediumFuelAvailable()) {
            return this.transportMediumFuel !== 'default';
          }
        } else return false;
        return true;
      }
      return false;
    },

    async calculateEmission() {
      if(!this.validateInput()) {
        console.error("Input invalid.")
        console.error("startLocation and endLocation must not be empty.")
        console.error("transportMediumName must not be null.");
        return;
      }
      const start = this.startLocation;
      const end = this.endLocation;

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
        this.calculatedEmission = emission.toFixed(2);
        this.$emit("calculatedEmission", this.calculatedEmission);
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
  }
}
</script>

<style scoped>

</style>