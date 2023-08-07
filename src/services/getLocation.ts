import {useWeatherStore} from "@/stores/weather";
import {storeToRefs} from "pinia";

const getUserLocation = ():Promise<void> => {

    const weatherStore = useWeatherStore()

    const {latitude, longitude} = storeToRefs(weatherStore)


    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    latitude.value = position.coords.latitude;
                    longitude.value = position.coords.longitude;
                    resolve();
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
            reject(new Error("Geolocation is not supported"));
        }
    });
};

export default getUserLocation