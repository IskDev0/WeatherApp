<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  item: {
    required: true
  }
})

const date = computed(() => {
  const inputDate = props.item.dt_txt;
  const dateObj = new Date(inputDate);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const hour = String(dateObj.getHours()).padStart(2, '0');
  const minute = String(dateObj.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} ${hour}:${minute}`;

})
</script>

<template>
  <img class="h-16" :src="` https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`" :alt="item?.weather[0]?.main">
  <p class="text-xl font-bold">{{Math.floor(item.main.temp)}}°C</p>
<p>{{date}}</p>
</template>
