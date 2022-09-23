//map
	
// filter 
	
// forEach
	
// reduce
	
// forIn

// [{name:'Bruno',age:20},{name:'carlos',age:15},{name:'Elisama',age:30}]
// .map(item => item.age)
// .filter(item => item >= 20)
// .reduce((accumulator, current)=> accumulator+current, 0)

// [{name:'Bruno',age:20},{name:'carlos',age:15},{name:'Elisama',age:30}]
// .reduce((accumulator, item)=> [...accumulator, item.age], [])
// .filter(item => item >= 20)


//consumo alto de memoria por ter muitos filtros
// [{name:'Bruno',age:20},{name:'carlos',age:15},{name:'Elisama',age:30}]
// .map(item => item.age)
// .filter(item => item >=0)
// .filter(item => item >= 20 && item <=40)
// .filter(item => item >= 25)
// .filter(item => item >= 29)
// //otimizado por aglomerar as condições 
// [{name:'Bruno',age:20},{name:'carlos',age:15},{name:'Elisama',age:30}]
// .map(item => item.age)
// .filter(item => item >=0 && item >= 20 && item <=40 && item >= 25 && item >= 29)

/**
 * - Filtrar os:
 *     - pares
 *     - impares
 *     - 2 digitos
 *     - 3 digitos
 *     - 2+ digitos
 *
 * - somar os:
 *      - imapres
 *      - pares
 */
 const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 20, 22, 24, 26, 28, 30, 500, 5002, 4567889,
  ];
  /**
   * ordernar:
   *  - maior para menor
   *  - menor para maior
   * filtrar:
   *  - vogais
   *  - consoantes
   *  - maiusculas
   *  - minusculas
   *  - minusculas + vogais
   *  - maisuculas + consoantes
   */
  const letters = [
    'y', 'b', 'z', 'D', 'e', 'f', 'g', 'h', 'i', 'j',
    'w', 'm', 'N', 'o', 'P', 'q', 'r', 's', 't', 'u',
    'v', 'x', 'c', 'K', 'l', 'a',
  ];
  /**
   * filtrar:
   *  - bruno, carlos
   *  - greg
   *  - alex, greg
   *  - primeiro e ultimo nome
   *  - segundo e penultimo nome
   *  - nome do meio da colecao
   */
  const names = [
    'alex', 'bruno', 'carlos', 'daniel', 'danilo', 'euler', 'greg',
  ];
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
  /**
   * Forma uma frase com as informações do objeto a seguir
   * Ex.: ` Ola meus nome é ${variavel}, ... `
   */
  const person = {
    name: 'José',
    age: 50,
    hobbies: ['nadar', 'corre', 'pedala'],
    sons: ['Mary', 'John'],
    languages: ['portuguese', 'chinese'],
    friends: [{
      name: 'Marcos',
      age: 60,
    }, {
      name: 'Marie',
      age: 57,
    }],
  };