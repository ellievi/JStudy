let date = new Date("2021-01-01 10:01:01.135");

//1 sec = 1000 mili
//1 min = 60 sec = 60000 mili
//1 hr = 60 min = 3600 sec = 360000 mili

// 1. Criar função para conversão de milisegundos para segundos
const msToSec = (milliseconds) => ((milliseconds / 1000));
	
// 	2. Criar função para conversão de milisegundos pra minutos
const msToMin = (milliseconds) => ((milliseconds / 60000))

// 	3. Criar função para conversão de milisegundos para horas
const msToHr = (milliseconds) => ((milliseconds / 3600000))
	
// 	4. Utilizar as funções criadas para responder ao enunciado anterior
const addHours = hour => date.getTime();
const dateResult = msToSec(date);
console.log('linha 19', dateResult);

const dateResult2 = msToMin(date);
console.log('linha 22', dateResult2);

const dateResult3 = msToHr(date);
console.log('linha 25', dateResult3);

// 5. Criar função para formatar milisegundos para DD/MM/YYYY HH:mm
const date2 = new Date();
console.log(date2.toString());
const formatDate = dateInstance => `${dateInstance.getDate()}/${dateInstance.getMonth() +1}/${dateInstance.getFullYear()}`;
const date2R = formatDate(date2);
console.log(date2R);