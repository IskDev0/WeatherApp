<script setup lang="ts">
import {onMounted} from "vue";
import getWeekWeather from "@/services/getWeekWeather";
import getLocation from "@/services/getLocation";
import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";
import WeekItem from "@/components/WeekItem.vue";
import getTodayWeather from "@/services/getTodayWeather";

const weatherStore = useWeatherStore()

const {weekWeather} = storeToRefs(weatherStore)

onMounted(async () => {
  await getLocation()
  await getTodayWeather()
  await getWeekWeather()
})
</script>

<template>
  <div class="md:w-2/3 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 p-4 h-screen md:mr-4 overflow-auto">
    <div class="bg-white py-2 px-6 rounded-lg shadow-lg text-center flex flex-col items-center gap-2"
         v-for="item in weekWeather" :key="item.dt">
      <WeekItem :item="item"/>
    </div>
  </div>
</template>