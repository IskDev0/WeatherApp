<script setup lang="ts">
import {onMounted} from "vue";
import getWeekWeather from "@/services/getWeekWeather";
import getLocation from "@/services/getLocation";
import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";
import WeekItem from "@/components/WeekItem.vue";
const weatherStore = useWeatherStore()

const {weekWeather} = storeToRefs(weatherStore)

onMounted(async () => {
  await getLocation()
  await getWeekWeather()
})
</script>

<template>
  <div class="w-2/3 grid grid-cols-8 gap-6 p-4 min-h-screen">
<div class="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center gap-2" v-for="item in weekWeather" :key="item.dt">
  <WeekItem :item="item"/>
</div>
  </div>
</template>

<style scoped>

</style>