/**
   * ordernar:
   *  - maior para menor
   *  - menor para maior
   * filtrar:
   *  - vogais
   *  - consoantes
   *  - maiusculas
   *  - minusculas
   *  - minusculas + vogais
   *  - maisuculas + consoantes
   */
 const letters = [
    'y', 'b', 'z', 'D', 'e', 'f', 'g', 'h', 'i', 'j',
    'w', 'm', 'N', 'o', 'P', 'q', 'r', 's', 't', 'u',
    'v', 'x', 'c', 'K', 'l', 'a',
  ];

  const letters2 = [...letters]
  const letters3 = [...letters]


  const smallestToBiggest = letters2.sort()
  const biggestToSmallest = letters3.sort().reverse()


  const showVogais = letters
  .filter(item => typeof item === 'string' 
    && item.charCodeAt(0) === 97 
    || item.charCodeAt(0) === 101 
    || item.charCodeAt(0) === 105 
    || item.charCodeAt(0) === 111 
    || item.charCodeAt(0) === 117)

  const showConsoantes = letters
  .filter(item => typeof item === 'string' 
    && item.charCodeAt(0) >= 65 
    && item.charCodeAt(0) <= 122 
    && ['a','e','i','o','u'].includes(item) === false)

  const showMaiusculas = letters
  .filter(item => typeof item === 'string' 
    && item.charCodeAt(0) >= 65 
    && item.charCodeAt(0) <= 90)

  const showMinusculas = letters
  .filter(item => typeof item === 'string' 
    && item.charCodeAt(0) >= 97 
    && item.charCodeAt(0) <= 122)

  const showMinusculasVogais = letters
  .join('')
  .match(/[a-z]/gm)
  .filter(letter=> ['a','e','i','o','u']
  .includes(letter) )

  const showMaisculasConsoantes = letters
  .filter(item => typeof item === 'string' 
    && item.charCodeAt(0) >= 65 
    && item.charCodeAt(0) <= 90)


  console.log('Maior para a menor: ', biggestToSmallest)
  console.log('Menor para a maior: ', smallestToBiggest)
  console.log('Vogais', showVogais)
  console.log('Consoantes', showConsoantes)
  console.log('Maiúsculas', showMaiusculas)
  console.log('Minúsculas', showMinusculas)
  console.log('Minúsculas + vogais', showMinusculasVogais)
  console.log('Maiúsculas + consoantes', showMaisculasConsoantes)