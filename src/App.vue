<script setup lang="ts">
import { RouterView } from 'vue-router'
import CurrentWeatherAside from "@/components/CurrentWeatherAside.vue";
import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";

const weatherStore = useWeatherStore()

const {todayWeather} = storeToRefs(weatherStore)
</script>

<template>
  <main class="flex flex-col md:flex-row gap-10 bg-[#F6F6F8] md:h-screen">
    <CurrentWeatherAside v-if="todayWeather" :todayWeather="todayWeather"/>
  <RouterView />
  </main>
</template>