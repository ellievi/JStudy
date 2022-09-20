/* Proposta: Criar uma classe auxiliar para calculos matematicos
Criterios de aceite:
- A classe deve conter uma funcao que faça:
  - Soma (estatica)
  - Divisao (estatica)
  - Subtração (estatica)
  - Multiplicação (estatica)
  - Raiz quadrada
  - Logaritmo
  - Potencia
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


class CustomMath {​
    sum1 = (value1, value2) => {​
        console.log('sum1')
        return value1+value2
    }​
    sum2 = (value1, value2) => {​
        console.log('sum2')
        return this.sum1(value1, value2)
    }​
    sum3 = (value1, value2) => {​
        console.log('sum3')
        return this.sum2(value1, value2)
    }​
}​
//dinamic
const math = new CustomMath()
console.log('call sum1\n')
math.sum1(1,1)
console.log('call sum2\n')
math.sum3(1,1)
console.log('call sum3\n')
math.sum3(1,1)
