function getAirStatus(co: number): string {
    if (co > 0 && co <= 25){
        return "Very Low";
    }
    else if (co > 50 && co <= 100){
        return "Low";
    }
    else if (co > 100 && co <= 200){
        return "Medium";
    }
    else if (co > 200 && co <= 400){
        return "High";
    }
    else if (co > 400){
        return "Very High";
    }
    else {
        return "Unknown";
    }
}


export default getAirStatus