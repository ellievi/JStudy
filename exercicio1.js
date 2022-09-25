/**
 * - Filtrar os:
 *     - pares
 *     - impares
 *     - 2 digitos
 *     - 3 digitos
 *     - 2+ digitos
 *
 * - somar os:
 *      - impares
 *      - pares
 */
 const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 20, 22, 24, 26, 28, 30, 500, 5002, 4567889,
  ];

console.log('PARES', numbers.filter(item => item %2 == 0))
console.log('ÍMPARES', numbers.filter(item => item %2 != 0))
console.log(' ')

console.log('2 Digitos',numbers.map(item => item).filter(item => item >=10 && item <=99))
console.log('3 Digitos',numbers.map(item => item).filter(item => item >=100 && item <=999))
console.log('2+ Digitos',numbers.map(item => item).filter(item => item >=100))


console.log(' ')
console.log('Soma dos pares', numbers.map(item => item).filter(item => item %2 == 0).reduce((acumulator, next) => acumulator + next, 0))
console.log('Soma dos ímpares', numbers.map(item => item).filter(item => item %2 != 0).reduce((acumulator, next) => acumulator + next, 0))
