class DateFormat{

    // Atributo ou variável da classe sendo iniciada com o valor new Date()
    date = new Date();

    constructor(info){
        this.date = info.date;
        // O atributo color será criado na classe dinamicamente
        // pois ela não existe igual ao atributo date
        this.color = info.color;
    };

    sum = (numero1, numero2) => (numero1 + numero2)

    formatToBrazilianDate = () => `${this.date.getDate()}/${this.date.getMonth() +1}/${this.date.getFullYear()}`
    showColor = () => `Cor: ${this.color}`;
}

// Criando um objeto com duas propriedades (date, color)
const payload = {date: new Date(), color: 'azul'}

// Instanciando a classe DateFormat 
// Passando a variável payload como conteúdo
// E atribuindo tudo à variável dateFormat
const dateFormat = new DateFormat(payload);

// Atribuindo a variável showBrFormat o retorno do método formatToBrazilianDate
const showBrFormat = dateFormat.formatToBrazilianDate();
// Atribuindo a variável showColorData o retorno do método showColor
const showColorData = dateFormat.showColor();

const somarNum = dateFormat.sum(10, 20)

// Impressão das variáveis já com o método atribuído
console.log(showBrFormat);
console.log(showColorData);
console.log(somarNum)