import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";

const getTodayWeather = async ():Promise<void> => {

    const api_key = import.meta.env.VITE_WEATHER_API

    const weatherStore = useWeatherStore()

    const {todayWeather, latitude, longitude} = storeToRefs(weatherStore)

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude.value}&lon=${longitude.value}&appid=${api_key}&units=metric`)
        todayWeather.value = await response.json()
        console.log(todayWeather.value)
    } catch (error) {
        console.error(error)
    }
}

export default getTodayWeather