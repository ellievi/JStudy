class Human{
    name = ' ';
    age = 0;
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.birthday = new Date(info.birthday = new Date());
    }
    // Método para pegar as informações dos atributos
    humanInfo = () => `Name: ${this.name}. Age: ${this.age}. Birthday: ${this.birthday.toISOString()} `

    // Método para pegar o ano do objeto birthday e adicionar 20 anos
    add20years = () => `${this.birthday.getFullYear() + 20}`

    // Método com o parâmetro ''years'' para o adicionar ao ano do objeto birthday(Date)
    addYear = (years) => `${this.birthday.getFullYear() + years}`

    // Método com dois parâmetros: 
    //''day'' para o somar ao dia do objeto birthday
    //''year'' para o somar ao ano do objeto birthday
    putDayYear = (day, year) => `${this.birthday.getUTCDate() + day} ${this.birthday.getFullYear() + year}`

    // Método com o parâmetro ''day'' para o somar ao dia do objeto birthday
    addDaysToBirthday = (day) => `${this.birthday.getUTCDate() + day}`

    // Método com os parâmetros de valores iniciais pré-configurados para 0
    // ''day'' para somar ao dia de birthday;
    // ''month'' para somar ao mês de birthday;
    // ''year'' para somar ao ano de birthday;
    addDayMonthYear = (day = 0, month = 0, year = 0) => `${this.birthday.getUTCDate() + day} ${this.birthday.getMonth() + 1 + month} ${this.birthday.getFullYear() + year}`

    // Método com o parâmetro ''month'' com o valor pré-definido = 0 para o somar ao mês de ''birthday''
    addMonth = (month = 0) => `${this.birthday.getMonth() + 1 + month}`

    // Método em objeto com o parâmetro ''param'', sem ligação com a classe
    //Atributos criados dinâmicamente: day. month, year, name
    updateInfo = (param) => `${param.day}, ${param.month}, ${param.year}, ${param.name}`

    // Método misto com o parâmetro ''param'' para a criação de atributos dinâmicos 
    // e com atributos pré-definidos na classe com o uso do ''this''
    // Irá pegar os valores de: name, ano de birthday
    updateNameYear = (param) => `${this.name} ${param.name}, ${this.birthday.getFullYear()} ${param.year}`

    // Método misto para multiplicação direta com o parâmetro ''param'' criado dinamicamente
    //e o this.age direto da classe
    multiply = (param) => this.age * param.age

    // Método misto (parâmetro interno e externo) para multiplicação em objeto 
    //com o parâmetro ''param'' criado dinamicamente
    //e o this.age direto da classe
    multiply2 = (param) => `${this.age * param.age}`

    // Método com os parâmetros ''person1'' e ''person2'' com os atributos criados dinâmicamente
    // ''name'' e ''age'' para os dois.
    nameAgeTwoPerson = (person1, person2) => `${person1.name} ${person1.age} ${person2.name} ${person2.age}`
}

const humanInstance1 = new Human({name: 'Elisama', age: '19', birthday: new Date('2003-04-10')});
const humanInstance2 = new Human({name: 'Antonio', age: '80', birthday: new Date('1942-06-20')});
const humanInstance3 = new Human({name: 'Julia', birthday: new Date('1997-01-10')});

// console.log(humanInstance1);
// console.log(humanInstance2);
// console.log(humanInstance3.addDaysToBirthday(5));
// console.log(humanInstance3.addDayMonthYear(10, 2, 8));
// console.log(humanInstance3.addMonth());
// console.log(humanInstance3.addDayMonthYear(10));
// console.log(humanInstance3.addDayMonthYear());
//  console.log(humanInstance3.humanInfo());
// console.log(humanInstance3.updateInfo({day: 1, month: 5, year: 2022, name: 'Julia'}))
// console.log(humanInstance3.updateNameYear({name: 'Carlos', year: 1989}))
// console.log(humanInstance2.multiply({age: 2}))
// console.log(humanInstance2.multiply2({age: 2}))
console.log(humanInstance1.nameAgeTwoPerson({name: 'Ana', age: '40'}, {name: 'Marilia', age: '20'}))