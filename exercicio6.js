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

  const partOfPhrase = person.map(item => item.name || item.age || item.languages || item.hobbies[0])
  console.log(partOfPhrase)