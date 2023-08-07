function getAirStatus (co:number):string {
    if (co > 0 && co <= 50){
        return "Good"
    }
    else if (co > 51  && co <= 100){
        return "Moderate"
    }
    else if (co > 101  && co < 150){
        return "Unhealthy for sensitive groups"
    }
    else if (co > 151  && co < 200){
        return "Unhealthy"
    }
    else if (co > 201 && co <= 300){
        return  "Very unhealthy"
    }
    else if (co > 501 && co <= 1000){
        return  "Very Hazardous"
    }
}

export default getAirStatus