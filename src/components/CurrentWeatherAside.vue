<script setup lang="ts">
defineProps({
  todayWeather: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <aside class="flex flex-col gap-8 items-center h-screen bg-white w-1/3 pt-10" v-if="todayWeather">
    <div class="flex flex-col items-center gap-4">
      <img class="h-32" :src="` https://openweathermap.org/img/wn/${todayWeather?.weather[0]?.icon}@2x.png`" :alt="todayWeather?.weather[0]?.main">
      <p class="font-semibold"><span class="text-5xl">{{Math.round(todayWeather?.main?.temp)}}</span>°C</p>
    </div>
    <div class="flex flex-col">
      <p>{{todayWeather?.weather?.[0]?.description}}</p>
      <p>{{todayWeather?.name}}, {{todayWeather?.sys.country}}</p>
    </div>
  </aside>
</template>
