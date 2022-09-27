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
    .map(item => item.value)
    .filter(item => typeof item === 'number' && Number.isInteger(item))
    .reduce((acumulator, next) => acumulator + next, 0)

  const calcFloat = numbersObject
    .map(item => item.value)
    .filter(item => typeof item === 'number' && !Number.isInteger(item))
    .reduce((acumulator, next) => acumulator + next, 0)


  console.log('Soma Números Inteiros: ', calcInt )
  console.log('Soma Números Flutuantes: ', calcFloat)
  /**
   * data.filter(item => typeof item === 'number')
  .filter(item => !String(item).includes('.'));
   * ['a','b',2.2,6,34,-34,{name:'bruno'}]
   *    .filter(item =>typeof item === 'number' && Number.isInteger(item))
  .reduce((accumulator, current)=> accumulator + current ,0)

 ['a','b',2.2,6,34,-34,{name:'bruno'}]
  .filter(item =>typeof item === 'number' && !Number.isInteger(item))
    .reduce((accumulator, current)=> accumulator + current ,0)


    //objetivo
['a','b',2.2,6,34,-34,{name:'bruno'}]
    .reduce((accumulator, current)=> 
       typeof current === 'number' && Number.isInteger(current) ? accumulator + current : accumulator
       ,0)
//detalhado
['a','b',2.2,6,34,-34,{name:'bruno'}]
    .filter(item => Number.isInteger(item))
    .reduce((accumulator, current)=>accumulator+current,0)
**/
