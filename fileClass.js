class Human{
    constructor(params){
        this.name = params.name
        this.age = params.age
        this.city = params.city
    }

    SetName = (name) => this.name = name
    SetAge = (age) => this.age = age
    SetCity = (city) => this.city = city

    GetName = () => `${this.name.toUpperCase()}`
    GetAge = () => this.age
    GetCity = () => `${this.city.toUpperCase().concat(' is cool')}`

    Whoiam = () => { console.log(`My name is ${this.name}, and i have ${this.age} years old, im from ${this.city}`) }

    GetWhoiam = () => { console.log(`My name is ${this.GetName()}, and i have ${this.GetAge()} years old, im from ${this.GetCity()}`) }
    
}

const Person = new Human({name:'Bruno',age:'35',city:'São Paulo'})

Person.Whoiam()
Person.GetWhoiam()

Person.SetName('Elisama')
Person.SetAge('18')
Person.SetCity('Los Angeles')

Person.Whoiam()
Person.GetWhoiam()
