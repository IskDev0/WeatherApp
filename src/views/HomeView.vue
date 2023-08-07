<script setup lang="ts">

import {computed, onMounted, ref} from "vue";
import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";
import getUserLocation from "@/services/getLocation";
import CurrentWeatherAside from "@/components/CurrentWeatherAside.vue";

const weatherStore = useWeatherStore()

const {latitude, longitude} = storeToRefs(weatherStore)

const api_key = import.meta.env.VITE_WEATHER_API

const data = ref()
const getTodayWeather = async () => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=${api_key}&units=metric`)
    data.value = await response.json()
  } catch (error) {
    console.error(error)
  }
}

// eslint-disable-next-line vue/return-in-computed-property
const sunrise = computed(() => {
  if (data.value && data.value.sys && data.value.sys.sunrise) {
    let date = new Date(data.value.sys.sunrise);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  }
});

// eslint-disable-next-line vue/return-in-computed-property
const sunset = computed(() => {
  if (data.value && data.value.sys && data.value.sys.sunset) {
    let date = new Date(data.value.sys.sunset);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  }
})


onMounted(async () => {
  await getUserLocation()
  await getTodayWeather()
})
</script>

<template>
  <CurrentWeatherAside v-if="data" :data="data"/>
</template>
