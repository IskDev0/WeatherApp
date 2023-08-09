<script setup lang="ts">
import SearchInput from "@/components/SearchInput.vue";

defineProps({
  todayWeather: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <aside class="flex flex-col gap-8 items-center p-4 md:h-screen bg-white md:w-1/3 pt-10" v-if="todayWeather">
    <SearchInput/>
    <div class="flex flex-col items-center gap-4">
      <img class="h-32" :src="` https://openweathermap.org/img/wn/${todayWeather?.weather[0]?.icon}@2x.png`" :alt="todayWeather?.weather[0]?.main">
      <p class="font-semibold"><span class="text-5xl">{{Math.round(todayWeather?.main?.temp)}}</span>°C</p>
    </div>
    <div class="flex flex-col items-center">
      <p class="font-semibold text-xl">{{todayWeather?.weather?.[0]?.description}}</p>
      <p>{{todayWeather?.name}}, {{todayWeather?.sys.country}}</p>
    </div>

    <div class="flex items-center gap-4">
    <RouterLink to="/">Today</RouterLink>
    <RouterLink to="week">Week</RouterLink>
    </div>
  </aside>
</template>
