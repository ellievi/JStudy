import Hours from './classhours.js';
import { goodDay } from './functionHours.js';
import { dayObject } from './dayObj.js';
import { submitForm } from './submit.js';

// Hours
const instanceHour = new Hours()
const showHour = instanceHour.getHour()

//console
console.log(dayObject.greeting, submitForm() ,showHour, 'horas.', goodDay())