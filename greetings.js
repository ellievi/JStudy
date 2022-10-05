import Hours from './classhours.js';
import { goodDay } from './functionHours.js';
import { nameObject } from './names.js';

// Hours
const instanceHour = new Hours()
const showHour = instanceHour.getHour()

//console
console.log(nameObject.greeting, showHour, 'horas.', goodDay())
