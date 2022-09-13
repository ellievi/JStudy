//trabalhando com posicoes do contrutor + variaveis
class Bruno1 {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showInfos = () => console.log(`classe: Bruno 1, this.name: ${this.name}, this.age: ${this.age}`)
}
const name = 'Bruno' 
const age = 35 
const bruno1 = new Bruno1( name , age)
//trabalhando com posicoes + valores direto
class Bruno2 {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    showInfos = () => console.log(`classe: Bruno 2, this.name: ${this.name}, this.age: ${this.age}`)
}
const bruno2 = new Bruno2( 'Bruno' , 35)
//trabnalhando com um objeto e seus atributos
class Bruno3 {
    constructor(info){
        this.name = info.name
        this.age = info.age
    }
    showInfos = () => console.log(`classe: Bruno 3, this.name: ${this.name}, this.age: ${this.age}`)
}
const payload3 =  { name: 'Bruno' , age: 35 }
const bruno3 = new Bruno3(payload3)
//trabnalhando com um array e seus valores
class Bruno4 {
    constructor(info){
        this.name = info[0].name
        this.age = info[1].age
    }
    showInfos = () => console.log(`classe: Bruno 4, this.name: ${this.name}, this.age: ${this.age}`)
}
const payload4 =  [{ name: 'Bruno'} ,{age: 35 }]
const bruno4 = new Bruno4(payload4)
//chamando so metodos
bruno1.showInfos()
bruno2.showInfos()
bruno3.showInfos()
bruno4.showInfos()