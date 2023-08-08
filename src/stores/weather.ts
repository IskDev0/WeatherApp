import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const latitude = ref<number>()
  const longitude = ref<number>()

  const todayWeather = ref()

  const airQuality = ref()


  return {latitude,longitude, todayWeather, airQuality }
})
