<script setup lang="ts">

import {ref} from "vue";
import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";
import getTodayWeather from "@/services/getTodayWeather";
import getAirQuality from "@/services/getAirQuality";
import getWeekWeather from "@/services/getWeekWeather";
const weatherStore = useWeatherStore()

const {latitude, longitude} = storeToRefs(weatherStore)

const api_key = import.meta.env.VITE_WEATHER_API

const cityLanLon = ref({})

const citySearch = ref()
const geocodeCity = async () => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${citySearch.value}&limit=1&appid=${api_key}`)
  const data = await response.json()
  cityLanLon.value = data[0]
  latitude.value = cityLanLon.value.lat
  longitude.value = cityLanLon.value.lon
  await getTodayWeather()
  await getAirQuality()
  await getWeekWeather()

  citySearch.value = ""
}
</script>

<template>
<form @submit.prevent="geocodeCity" class="flex items-center gap-3 bg-gray-100 py-2 px-4 rounded-lg">
  <img src="/search.svg" alt="search icon">
  <input v-model="citySearch" class="bg-transparent focus:outline-none" type="text" placeholder="Search for places...">
</form>
</template>