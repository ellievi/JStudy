import Hours from './classhours.js'

export const goodDay= () => {

    const hoursInstance = new Hours()
    const hour = hoursInstance.getHour();

    return hour >= 5 && hour <= 11 
    ? 'Bom dia!' 
    : hour >= 12 && hour <= 18 
    ? 'Boa tarde!' 
    : hour >= 18 && hour <= 23 || hour == 0
    ? 'Boa noite!'
    : 'Boa madrugada!'
}


/*
export function goodDay() { 

    const hoursInstance = new Hours()
    const showHour = hoursInstance.getHour();

    if (showHour >= 6 && showHour <= 12){
        return 'Bom dia!'
    }

    if (showHour >= 13 && showHour <= 17){
        return 'Boa tarde!'
    }

    if (showHour >= 18 && showHour <= 23 || showHour == 0){
        return 'Boa noite!'
    }

    return 'Boa madrugada!'
}
*/ 