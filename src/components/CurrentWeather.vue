<script setup lang="ts">

import getDirection from "@/services/getDirection";
import getAirStatus from "@/services/airStatus";
import {computed} from "vue";

const props = defineProps({
  todayWeather: {
    required: true,
    type: Object
  },
  airQuality: {
    required: true
  }
})

// eslint-disable-next-line vue/return-in-computed-property
const sunrise = computed(() => {
  if (props.todayWeather && props.todayWeather.sys && props.todayWeather.sys.sunrise) {
    let date = new Date(props.todayWeather.sys.sunrise);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours}:${minutes}`;
  }
});

// eslint-disable-next-line vue/return-in-computed-property
const sunset = computed(() => {
  if (props.todayWeather && props.todayWeather.sys && props.todayWeather.sys.sunset) {
    let date = new Date(props.todayWeather.sys.sunset);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return `${hours}:${minutes}`;
  }
})


</script>

<template>
<div class="w-2/3 pt-10 pr-10">
  <div class="grid  grid-cols-3 gap-8">
  <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
   <p class="text-gray-500 text-xl">Wind Status</p>
    <div>
      <p class="font-semibold"><span class="text-5xl">{{todayWeather.wind.speed}}</span>m/s</p>
      <p>{{getDirection(todayWeather.wind.deg)}}</p>
    </div>
  </div>
  <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
    <p class="text-gray-500 text-xl">Sunrise & Sunset</p>
    <div>
      <div class="flex items-center gap-2"><img class="h-8 w-8" src="/sunrise.png" alt=""><p class="font-semibold text-xl">{{sunrise}}</p></div>
      <div class="flex items-center gap-2"><img class="h-8 w-8" src="/sunset.png" alt=""><p class="font-semibold text-xl">{{sunset}}</p></div>
    </div>
  </div>
  <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
    <p class="text-gray-500 text-xl">Humidity</p>
    <p class="font-semibold"><span class="text-5xl">{{todayWeather.main.humidity}}</span> %</p>
  </div>
  <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
    <p class="text-gray-500 text-xl">Visibility</p>
    <p class="font-semibold"><span class="text-5xl">{{todayWeather.visibility % 1000 == 0 ? todayWeather.visibility / 1000 : (todayWeather.visibility).toFixed(2)}}</span> km</p>
  </div>
    <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
      <p class="text-gray-500 text-xl">Air Quality</p>
      <p class="text-5xl font-bold">{{airQuality?.list[0]?.components.co}}</p>
      <p class="font-semibold">{{getAirStatus(airQuality?.list[0]?.components.co)}}</p>
    </div>
</div>
</div>
</template>
