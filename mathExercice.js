/*
- Soma (estatica)  OK
- Divisao (estatica)  OK
- Subtração (estatica)  OK
- Multiplicação (estatica)  OK
- Raiz quadrada  OK
- Logaritmo OK
- Potencia  OK
- Número de PI OK
- Número de Euler OK
- Somar uma lista de numeros OK
   - parametro: um array de inteiros
      ex:  usando o REDUCER do javascript de preferência
          const valores = [1,2,3,4,5,6,7, ...]
                funName = lista => list.reduce((acumulator, current) => ... ,0)  
Obs:
- Todos valores s/ao recebidos dinamicamente
- Os parametros devem ser via argumentos ou objeto
*/

class CustomMath{

    static AUTORA = 'Elisama'

    static sum = (value1, value2) => value1 + value2

    static div = (value1, value2) => value1 / value2

    static sub = (value1, value2) => value1 - value2

    static mul = (value1, value2) => value1 * value2

    raizqua = (value1) =>  value1 ** (1/2)

    log = (value1) => Math.log(value1)

    pi = () => Math.PI

    euler = () => Math.E

    pot = (value1, value2) => value1 ** value2
    
}

console.log('Soma: ', CustomMath.sum(1,3));
console.log('Divisão: ', CustomMath.div(4,2));
console.log('Subtração: ', CustomMath.sub(4,3));
console.log('Multiplicação: ', CustomMath.mul(4,4));
console.log('Constante da classe: ', CustomMath.AUTORA);

const math = new CustomMath()
console.log('Raiz quadrada: ', math.raizqua(25))
console.log('Potência: ', math.pot(5, 2))
console.log('PI: ', math.pi())
console.log('Euler: ', math.euler())
console.log('Logarítimo: ', math.log(20))

const values = [
    {value: "value1", quant: 1},
    {value: "value2", quant: 2},
    {value: "value3", quant: 3},
    {value: "value1", quant: 4},
    {value: "value2", quant: 5},
    {value: "value3", quant: 6},
    {value: "value2", quant: 7},
    {value: "value3", quant: 8},
    {value: "value1", quant: 9},
    {value: "value2", quant: 10}
]
const totalValues = values.reduce( (acumulator, next) => acumulator + next.quant, 0)

const totalValues1 = values.reduce( function (acumulator, next) {
    return acumulator + next.quant} , 0)

console.log('Reduce', totalValues)
console.log('Reduce2', totalValues1)