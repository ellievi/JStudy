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

console.log('Bruno, Carlos' ,names.filter( item  => item == names[1] || item == names[2]));
console.log(' ')
console.log('Greg' ,names.filter( item  => item == names[6]));
console.log(' ')
console.log('Alex, Greg' ,names.filter( item  => item == names[1] || item == names[2] ));
console.log(' ')
console.log('Primeiro e Último' ,names.filter( item  => item == names[0] || item == names[6] ));
console.log(' ')
console.log('Segundo e Penúltimo' ,names.filter( item  => item == names[1] || item == names[5] ));
console.log(' ')
console.log('Nome no meio' ,names.filter( item  => item == names[3]));
  