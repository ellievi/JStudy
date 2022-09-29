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

  const showVogais = letters
  .filter(item => typeof item === 'string' && item.charCodeAt(0) === 97 || item.charCodeAt(0) === 101 || item.charCodeAt(0) === 105 || item.charCodeAt(0) === 111 || item.charCodeAt(0) === 117)

  const showConsoantes = letters
  .filter(item => typeof item === 'string' && item != showVogais.item && item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 122)

  const showMaiusculas = letters
  .filter(item => typeof item === 'string' && item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90)

  const showMinusculas = letters
  .filter(item => typeof item === 'string' && item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)

  const showMinusculasVogais = letters
  .filter(item => typeof item === 'string' && item.charCodeAt(0) === 97 || item.charCodeAt(0) === 101 || item.charCodeAt(0) === 105 || item.charCodeAt(0) === 111 || item.charCodeAt(0) === 117 && item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)

  const showMaisculasConsoantes = letters
  .filter(item => typeof item === 'string' && item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90)


  console.log(showVogais)
  console.log(showConsoantes)
  console.log(showMaiusculas)
  console.log(showMinusculas)
  console.log(showMinusculasVogais)
  console.log(showMaisculasConsoantes)