
    const person = {
        name:'Bruno',
        age:'35',
        city:'São Paulo'
    }

    const SetName = (name) => person.name = name
    const SetAge = (age) => person.age = age
    const SetCity = (city) => person.city = city

    const GetName = () => `${person.name.toUpperCase()}`
    const GetAge = () => person.age
    const GetCity = () => `${person.city.toUpperCase().concat(' is cool')}`

    const Whoiam = () => { console.log(`My name is ${person.name}, and i have ${person.age} years old, im from ${person.city}`) }

    const GetWhoiam = () => { console.log(`My name is ${GetName()}, and i have ${GetAge()} years old, im from ${GetCity()}`) }

    Whoiam()
    GetWhoiam()

    SetName('Elisama')
    SetAge('18')
    SetCity('Los Angeles')

    Whoiam()
    GetWhoiam()
