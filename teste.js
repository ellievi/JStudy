const preventReload = (event) => event.preventDefault();

var input = document.querySelector('#name')
var bestie = input.value;


function whoIs() {   

    return new Promise((resolve, reject) => {

        if(bestie != 'Dam'){
            reject({
                name: `${bestie}?`,
                message: 'ela é linda mas resposta erada, tente dnv...'
            })
        }else{
            resolve({
                name: `${bestie}?`,
                message: 'Dam é a mais linda do Maranhão ^3^'
            })
        }
    })
} 

whoIs()
    .then((result) => {
        console.log(`${result.name}? Acertoou! ${result.message}`)
    }).catch((error) => {
        console.log(`${error.name} ${error.message}`)
    })



const insertInfos = () => {
    const submitInfos = whoIs();
    console.log(submitInfos);
}

