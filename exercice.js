// Imprimir data hoje, Imprimir data sem os minutos
let date = new Date();
console.log(date);

// let date_today = new Date().toString(dd/MM/yyyy);
// console.log(date_today)


//Imprimir daqui a 12 horas, 24 h
const addHours = hour => date.getTime() + (1000 * 60 * 60 * hour);
console.log(new Date(addHours(12)))
console.log(new Date(addHours(24)))

// Imprimir data 01/01/2021 00:00:01
const date1 = new Date("2021-01-01 00:00:01.001");
console.log(date1)
console.log(`${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`)
console.log(`${date.toISOString().replace('T', ' ').replace('Z',' ')}`)

const date2 = new Date("2022-01-01");
// Imprimir diferença entre 01/01/2021 e 01/01/2022
const dateSub = (date2.getTime() - date1.getTime());
const msToYears = (milliseconds) => ((((milliseconds / 1000) / 60) / 60) / 24) / 365
const dateResult = msToYears(dateSub)
console.log('linha 24' , (Math.round(dateResult)))



// Imprimir diferença entre 01/01/2021 09:00:00 e 01/01/2022 12:00:00
const date3 = new Date("2021-01-01T09:00:00Z");
const date4 = new Date("2022-01-01T12:00:00Z");

const dateSub2 = Date(date4.getTime() - date3.getTime());
console.log('linha 30' , new Date (dateSub2));

// Pegar os milisegundos da data atual