import axios from 'axios';
import fetch from 'node-fetch';
/*
const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
console.log(Object.entries(pokemon.data))


const username = "ellievi"
fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'appliction/vnd.github.v3+json',
    },
})
.then((response)=>{
    console.log(response)
    return response.json()
})
.then((data)=>{
    console.log(`'O nome de usuário é: ${data.name}'`)
})
.catch((err)=>{
    console.log(`Ocorreu um erro: ${err}`)
})


function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then(data => data.json())
    .catch(err => console.log(err))
}

async function showUsername(id) {
    const user = await getUser(id)

    console.log(`O nome do usuário é: ${user.data.first_name}`)
}

console.log(showUsername(8));


async function showData(res){
    const getData = await fetch('https://api.github.com/users/ellievi')
    .then((res) => res.json());
    console.log(getData)
}
console.log(showData())


async function showPokemon(res,err){
    const getPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res)=> res.json())
    .catch(console.log(`Houve um erro: ${err}`));

    console.log(Object.entries(getPokemon))
}

console.log(showPokemon())


async function showData(res,err){
    const getData = await fetch('https://swapi.dev/api/people/1')
    .then((res)=>res.json())
    .catch(`Houve um erro: ${err}`)

    console.log(getData)
}
console.log(showData())

const showData = await fetch('https://swapi.dev/api/people/1')
.then(async res => await res.json())
.catch(async err => await err.json())

console.log(Object.values(showData))


const bestFood = 'ramen'

function bestFoodCallback(callback, errorCallback) {   

    return new Promise((resolve, reject) => {

        if(bestFood != 'ramen'){
            reject({
                name: 'This is wrong!',
                message: `${bestFood.toUpperCase()}? No.`
            })
        }else{
            resolve({
                name: bestFood.toUpperCase(),
                message: 'Ramen is the best!'
            })
        }
    })
} 

bestFoodCallback()
    .then((result) => {
        console.log(`${result.name}? Yes! ${result.message}`)
    }).catch((error) => {
        console.log(`${error.name} ${error.message}`)
    })
*/