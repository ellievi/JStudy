import Hours from './classhours.js';
import { goodDay } from './functionHours.js';
import { dayObject } from './dayObj.js';

// Hours
const instanceHour = new Hours()
const showHour = instanceHour.getHour()

//console
console.log(dayObject.greeting ,showHour, 'horas.', goodDay())