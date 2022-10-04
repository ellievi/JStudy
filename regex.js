/**
  const letters2 = [...letters]
  const letters3 = [...letters]
  const smallestToBiggest = [...letters].sort()
  const biggestToSmallest = [...letters].sort().reverse()

  const showVogais2 = letters
    .filter(item => typeof item === 'string' 
        &&  ['a','A'].includes(item) 
        ||  ['e','E'].includes(item) 
        ||  ['i','I'].includes(item) 
        ||  ['o','O'].includes(item) 
        ||  ['u','U'].includes(item))


  const showVogais3 = letters
    .filter(item => typeof item === 'string' 
        &&  ['a','A','e','E','i','I','o','O','u','U'].includes(item))


  -> usando RegEx ( expressoes regulares )
  const showVogais4 = letters.join('').match(/(a|e|i|o|u)/gmi)

  -> consoantes com regex
  const showVogaisInverso = letters.join('').match(/[^(a|e|i|o|u)]/gmi)

  const showVogais = letters
  .filter(item => typeof item === 'string' 
  &&  ['a','e','i','o','u'].includes(item))

  const showConsoantes = letters
  .filter(item => typeof item === 'string' && item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 122 && item.charCodeAt(0) != 97 && item.charCodeAt(0) !=101 && item.charCodeAt(0) != 105 && item.charCodeAt(0) != 111 && item.charCodeAt(0) != 117 )
  
  const showConsoantes = letters.join('').match(/[^(a|e|i|o|u)]/gmi)

  const showMaiusculasRegex = letters.join('').match(/(A|E|I|O|U)/gm)

  const showMinusculasRegex = letters.join('').match(/[a-z]/gm)

  
  const showMinusculasVogaisRegex = letters
    .join('')
    .match(/[a-z]/gm)
    .match(/(a|e|i|o|u)/gmi)
  
    const showMinusculasVogaisRegex = letters
    .join('')
    .match(/[a-z]/gm)
    .filter(letter=> ['a','e','i','o','u'].includes(letter) )
  
    const showMinusculasConsoanteRegex = letters
    .join('')
    .match(/[a-z]/gm)
    .filter(letter=> ['a','e','i','o','u'].includes(letter) === false )

     */