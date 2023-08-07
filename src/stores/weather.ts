import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', () => {
  const latitude = ref<number>()
  const longitude = ref<number>()


  return {latitude,longitude }
})
