/**
   * Somar os numeros inteiros 
   * Somar os numeros com ponto flutuante 
   * Selecionar as letras apenas 
   * Selecionar os objetos apenas 
   * Selecionar letras minusculas
   * Selecionar letras maisculas
   * Selecionar numeros com pontos flutuantes 
   * Selecionar o nome "XUXA" e exibir sua idade 
   *
   */
 const numbersObject = [
    { value: 1 },
    { value: 4 },
    { value: 56 },
    { value: 'A' },
    { value: 'b' },
    { value: 'C' },
    { value: 'd' },
    { value: 'EEE' },
    { value: 59 },
    { value: 10000 },
    { value: 5.6 },
    { value: 98.7 },
    { value: 'Xuxa', age: 201 },
    { value: { name: 'Bruno' } },
  ];

  const calcInt = numbersObject
    .reduce((accumulator, next) => 
    typeof next === 'object' && typeof next.value === 'number' && Number.isInteger(next.value)
    ? accumulator + next.value
    : accumulator, 0)

  const calcFloat = numbersObject
  .reduce((accumulator, next) =>
  typeof next === 'object' && typeof next.value === 'number' && !Number.isInteger(next.value) 
  ? accumulator + next.value 
  : accumulator, 0)

  const selectString = numbersObject
  .map(item => item.value)
  .filter(item => typeof item === 'string')

  const showObjects = numbersObject
  .map(item => item.value)
  .filter(item => typeof item === 'object')


  const showFloat = numbersObject
  .map(item => item.value)
  .filter(item => typeof item === 'number' && !Number.isInteger(item))

  const selectSmallLetters = numbersObject
  .map(item => item.value)
  .filter(item => typeof item === 'string' && item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90)

  const selectBigLetters = numbersObject
  .map(item => item.value)
  .filter(item => typeof item === 'string' && item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)

  const nameX = numbersObject
  .map(item => item.value)
  .filter(item => typeof item === 'string' || typeof item === 'number')

  const showNameX = nameX[12]


  console.log('Mostrar as letras', selectString)
  console.log('Soma Números Inteiros: ', calcInt )
  console.log('Soma Números Flutuantes: ', calcFloat)
  console.log('Objetos: ', showObjects)
  console.log('Letras minúsculas: ', selectSmallLetters)
  console.log('Letras maiúsculas: ', selectBigLetters)
  console.log('Números flutuantes: ', showFloat)
  console.log('Nome + idade:', showNameX.toUpperCase())
