<script setup lang="ts">
defineProps({
  data: {
    required: true,
    type: Object
  }
})
</script>

<template>
  <aside class="flex flex-col gap-8 items-center h-screen bg-white w-1/4 pt-10" v-if="data">
    <div class="flex flex-col items-center gap-4">
      <img class="h-32" :src="` https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`" :alt="data?.weather[0]?.main">
      <p class="font-semibold"><span class="text-5xl">{{Math.round(data?.main?.temp)}}</span>°C</p>
    </div>
    <div class="flex flex-col">
      <p>{{data?.weather?.[0]?.description}}</p>
      <p>{{data?.name}}, {{data?.sys.country}}</p>
    </div>
  </aside>
</template>
