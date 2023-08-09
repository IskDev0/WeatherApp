import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";


const getAirQuality = async () => {

    const weatherStore = useWeatherStore()

    const {latitude, longitude, airQuality} = storeToRefs(weatherStore)

    const api_key = import.meta.env.VITE_WEATHER_API

    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude.value}&lon=${longitude.value}&appid=${api_key}`)
    airQuality.value = await response.json()
    console.log(airQuality.value)
}

export default getAirQuality