<script setup lang="ts">

import {computed, onMounted, ref} from "vue";
import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";
import getUserLocation from "@/services/getLocation";
import CurrentWeatherAside from "@/components/CurrentWeatherAside.vue";
import CurrentWeather from "@/components/CurrentWeather.vue";

const weatherStore = useWeatherStore()

const {latitude, longitude} = storeToRefs(weatherStore)

const api_key = import.meta.env.VITE_WEATHER_API

const todayWeather = ref()
const airQuality = ref()
const getTodayWeather = async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=${api_key}&units=metric`)
    todayWeather.value = await response.json()
    console.log(todayWeather.value)
  } catch (error) {
    console.error(error)
  }
}

const getAirQuality = async () => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude.value}&lon=${longitude.value}&appid=${api_key}`)
  airQuality.value = await response.json()
  console.log(airQuality.value)
}



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
