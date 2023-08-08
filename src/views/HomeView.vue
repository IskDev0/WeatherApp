<script setup lang="ts">

import {onMounted} from "vue";
import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";
import getUserLocation from "@/services/getLocation";
import getTodayWeather from "@/services/getTodayWeather";
import CurrentWeatherAside from "@/components/CurrentWeatherAside.vue";
import CurrentWeather from "@/components/CurrentWeather.vue";
import getAirQuality from "@/services/getAirQuality";

const weatherStore = useWeatherStore()

const {todayWeather, airQuality} = storeToRefs(weatherStore)

onMounted(async () => {
  await getUserLocation()
  await getTodayWeather()
  await getAirQuality()
})
</script>

<template>
  <div class="flex gap-20">
    <CurrentWeatherAside v-if="todayWeather" :todayWeather="todayWeather"/>
    <CurrentWeather v-if="todayWeather" :todayWeather="todayWeather" :airQuality="airQuality"/>
  </div>
</template>
