// const human = {
//     nationality: 'brazilian',
//     language: 'portuguese'
// }
// const GetNati = (nationality) => human.nationality
// const GetLangua = (language) => human.language

// console.log(`Your nationality is ${GetNati()} and your language is ${HGetLang()}.`)

// humano
class Human { //creation of the class
    constructor(nationality,language){  //creation of the constructor with the attributes
        this.nationality = nationality //first attribute
        this.language = language //second attribute
    }

    showHuman = () =>{ //phrase method
        console.log(`Your nationality is ${this.nationality} and your language is ${this.language}.`) 
    } //method for giving attributes a console phrase
}
const Br = new Human("Brazilian","portuguese") //doing parametres

Br.showHuman() //fusion of the phrase and parametre's setup


// carro
class Car{ //creation of the class
    constructor(brand,color){ //constructor creation and him parametres
        this.brand = brand //first attribute
        this.color = color //second attribute
    }

    showCar = () =>{
        console.log(`The car's brand is ${this.brand} and him color is ${this.color}.`)
    } //method for giving attributes a console phrase
}

const CarInfo = new Car("Porsche","black") //giving values to the attributes

CarInfo.showCar() //fusion of the values of the attributes and the console phrase

// 

class Dog{
    constructor(breed,color,height){
        this.breed = breed;
        this.color = color;
        this.height = height;
    }
    getInfo(){
        return {
            breed: this.breed,
            color: this.color,
            height: this.height,
        };
    }
}
const makeDogSmall = (breed, color) => new Dog(breed,color,20);


const Shitzu = makeDogSmall('shitzu','black and white');

Shitzu.getInfo();


//teste
function nomeCompleto(nome,sobrenome){
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    function mostraNome(){
        return console.log(`Nome: ${nome}, Sobrenome: ${sobrenome}`);
    }

    pessoa.mostraNome = mostraNome;

    return pessoa;
}

let pessoaA = nomeCompleto('Elisama','Carvalho');
pessoaA.mostraNome();
let pessoaB = nomeCompleto('Vitória','Lins');
pessoaB.mostraNome();


//sorvete
function maquinaSorvete(sabor,tamanho){
    let sorvete = {};
    sorvete.sabor = sabor;
    sorvete.tamanho = tamanho;

    function mostraSorvete(){
        return console.log(`Sabor: ${sabor}, tamanho: ${tamanho}`);
    }

    sorvete.mostraSorvete = mostraSorvete;
    return sorvete;
}

let sorvete1 = maquinaSorvete('morango', 'médio');
sorvete1.mostraSorvete();
let sorvete2 = maquinaSorvete('flocos','pequeno');
sorvete2.mostraSorvete();


//GAMES
function gamesArcade(title,year){
    let games = {};
    games.title = title;
    games.year = year;

    function showGames(){
        return console.log(`Title: ${title}. Year: ${year}`)
    }
    games.showGames = showGames;
    return games;
}

let game1 = gamesArcade('The Elder Scross V: Skyrim', '2013');
game1.showGames();
let game2 = gamesArcade('League of Legends','2009')
game2.showGames();


// Jogos
class Jogos{
    constructor(titulo, ano){
        this.titulo = titulo;
        this.ano = ano;
    }

    getInfo(){
        return{
            titulo: this.titulo,
            ano: this.ano,
        };       
    }
}

const showGamesInfo = (titulo,ano) => new Jogos(titulo,ano)
const showGamesInfoYear = (titulo) => new Jogos(titulo,2009)

const jogo1 = showGamesInfo('The Elder Scrolls V: Skyrim','2011');
console.log(jogo1.getInfo());
const jogo2 = showGamesInfoYear('League of Legends')
console.log(jogo2.getInfo());
const jogo3 = showGamesInfoYear('New Super Mario Bros. Wii')
console.log(jogo3.getInfo());

//Animation
class Animation{
    constructor(title2,release,classification){
        this.title2 = title2;
        this.release = release;
        this.classification = classification;
    }
    getInfo(){
        return{
            Title: this.title2,
            Release: this.release,
            Classification: this.classification,
        };
    }
}
const showAnimation = (title2,release,classification) => new Animation(title2,release,classification);
const makeAnimationNew = (title2,classification) => new Animation(title2,2021,classification);

const cartoon1 = makeAnimationNew('Arcane','14')
console.log(cartoon1.getInfo())

const cartoon2 = showAnimation('The Incredibles',2004,'free')
console.log(cartoon2.getInfo())