/*
- Soma (estatica)  OK
- Divisao (estatica)  OK
- Subtração (estatica)  OK
- Multiplicação (estatica)  OK
- Raiz quadrada  
- Logaritmo 
- Potencia  OK
- Número de PI
- Número de Euler
- Somar uma lista de numeros 
   - parametro: um array de inteiros
      ex:  usando o REDUCER do javascript de preferência
          const valores = [1,2,3,4,5,6,7, ...]
                funName = lista => list.reduce((acumulator, current) => ... ,0)  
Obs:
- Todos valores s/ao recebidos dinamicamente
- Os parametros devem ser via argumentos ou objeto
*/

class CustomMath{
    static sum = (value1, value2) => {
        return value1 + value2
    }

    static div = (value1, value2) => {
        return (value1) / (value2)
    }

    static sub = (value1, value2) => {
        return value1 - value2
    }

    static mul = (value1, value2) => {
        return value1 * value2
    }

    raizqua = (value1) => {
        return value1 * 2 / value1
    }

    log = (value1) => {

    }

    pot = (value1, value2) => {
        return value1 ** value2
    }
}

console.log('Soma: ', CustomMath.sum(1,3));
console.log('Divisão: ', CustomMath.div(4,2));
console.log('Subtração: ', CustomMath.sub(4,3));
console.log('Multiplicação: ', CustomMath.mul(4,4));

const math = new CustomMath()

console.log('Raiz quadrada: ', math.raizqua(16))
console.log('Potência: ', math.pot(5, 2))