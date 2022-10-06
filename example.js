/**
 * resp success = { status: true, data: object }
 * resp fail = { status: false, error: object }
 * 
 */
 const consulta = () => {
    const result = fetch('pokemon')
    if(result.status === true)
        result.data === [ pokemons ]
    if(result.status === false)
        result.error 
    
}
const consulta2 = () => {
    const result = fetch('pokemon')
    try {
        result.data === [ pokemons ]
    } catch (err) {
       console.log('deu rum', err) 
    }
}
const consulta3 = () => {
    const result = fetch('pokemon').then(resultado => resultado).catch(err => err)
}