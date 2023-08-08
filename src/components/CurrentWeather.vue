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
    let date = new Date(props.todayWeather.sys.sunrise * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();

    // Используем padStart для добавления нуля перед однозначными минутами
    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  }
});


// eslint-disable-next-line vue/return-in-computed-property
const sunset = computed(() => {
  if (props.todayWeather && props.todayWeather.sys && props.todayWeather.sys.sunset) {
    let date = new Date(props.todayWeather.sys.sunset * 1000 );
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}:${minutes.toString().padStart(2, '0')}`;
  }
})

let rotate = 5
</script>

<template>
<div class="w-2/3 pt-10 pr-10">
  <div class="grid grid-cols-3 gap-8">
  <div class="bg-white p-8 rounded-lg shadow-lg aspect-square flex flex-col items-start justify-between">
    <div>
   <p class="text-gray-500 text-xl mb-10">Wind Status</p>
    <div>
      <p class="font-semibold"><span class="text-5xl">{{todayWeather.wind.speed}}</span>m/s</p>
      <p class="mt-4 font-semibold">{{getDirection(todayWeather.wind.deg)}}</p>
    </div>
    </div>
    <img class="bg-gray-200 rounded-full p-1" :style="{ transform: 'rotate('+ todayWeather.wind.deg+'deg)'}" src="/compass.svg" alt="compass">
  </div>

  <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
    <p class="text-gray-500 text-xl mb-10">Sunrise & Sunset</p>
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-2"><img class="h-8 w-8" src="/sunrise.png" alt=""><p class="font-semibold text-xl">{{sunrise}}</p></div>
      <div class="flex items-center gap-2"><img class="h-8 w-8" src="/sunset.png" alt=""><p class="font-semibold text-xl">{{sunset}}</p></div>
    </div>
  </div>

  <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
    <p class="text-gray-500 text-xl mb-10">Humidity</p>
    <div class="flex items-center gap-2">
      <img src="/humidity.svg" alt="humidity">
    <p class="font-semibold"><span class="text-5xl"> {{todayWeather.main.humidity}}</span> %</p>
    </div>
  </div>
  <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
    <p class="text-gray-500 text-xl mb-10">Visibility</p>
    <p class="font-semibold"><span class="text-5xl">{{todayWeather.visibility % 1000 == 0 ? todayWeather.visibility / 1000 : (todayWeather.visibility).toFixed(2)}}</span> km</p>
  </div>

    <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
      <p class="text-gray-500 text-xl mb-10">Air Quality</p>
      <p class="text-5xl font-bold">{{airQuality?.list[0]?.components.co}}</p>
      <p class="font-semibold mt-4">{{getAirStatus(airQuality?.list[0]?.components.co)}}</p>
    </div>

    <div class="bg-white p-8 rounded-lg shadow-lg aspect-square">
      <p class="text-gray-500 text-xl mb-10">Pressure</p>
      <p class="font-semibold"><span class="text-5xl">{{todayWeather.main.pressure}}</span> Pa</p>
    </div>
</div>
</div>
</template>
