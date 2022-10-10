/* import axios from 'axios';
const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
console.log(Object.entries(pokemon.data)) */
import fetch from 'node-fetch';

const pokemon = await fetch('https://swapi.dev/api/people/5')
.then(async response => await response.json());

console.log(pokemon);