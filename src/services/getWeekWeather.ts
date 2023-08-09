import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";


const getWeekWeather = async ():Promise<void> => {

    const weatherStore = useWeatherStore()

    const {latitude, longitude, weekWeather} = storeToRefs(weatherStore)

    const api_key = import.meta.env.VITE_WEATHER_API

    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude.value}&lon=${longitude.value}&appid=${api_key}&units=metric`)
    const data = await response.json()
    weekWeather.value = data.list
    console.log(weekWeather.value)
}

export default getWeekWeather