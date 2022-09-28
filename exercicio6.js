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

  const age = person.age

  const nome = person.name

  const hobbie = person.hobbies[0]

  const languages = person.languages

  const friends = person.friends

  const friend1 = friends[0].name
  const friend2 = friends[1].name

  const friendage1 = friends[0].age
  const friendage2 = friends[1].age

  console.log(`Meu nome é ${nome} e minha idade é ${age}. Gosto de ${hobbie} e falo ${languages[0]} e ${languages[1]} fluentemente. Meus amigos são ${friend1} e ${friend2} de ${friendage1} e ${friendage2} anos respectivamente`)
