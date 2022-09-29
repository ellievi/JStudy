/**
   * filtrar:
   *  - somar os impares
   *  - somar os pares
   *  - somar os maiores que 9+
   *  - multiplicar os impares
   *  - Selecionar os numeros maiores que 9+
   */
 const numbersFloat = [
    1.1, 2.4, 4.56, 0.4, 123.456, 3.4, 4567.8, 1.0, 10.0, 10.00, 10.000, 323.3233, 9.8765,
  ];

  console.log('Somar Ímpares:' ,numbersFloat
  .map(item => item)
  .filter(item => item%2 != 0)
  .reduce((accumulator, next) => 
    accumulator + next, 0));

  console.log('Somar Pares:', numbersFloat
  .map(item => item)
  .filter(item => item%2 == 0)
  .reduce((accumulator, next) => 
    accumulator + next, 0));

  console.log('Somar maiores que 9:' ,numbersFloat
  .map(item => item)
  .filter(item => item > 9.0)
  .reduce((accumulator, next) => 
    accumulator + next, 0));

  console.log('Multiplicar Ímpares:' ,numbersFloat
  .map(item => item)
  .filter(item => item%2 != 0)
  .reduce((accumulator, next) => 
    accumulator * next, 1));

  console.log('Números maiores que 9:' ,numbersFloat
  .map(item => item)
  .filter(item => item > 9));
