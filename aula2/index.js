const listaLivros = require('./array');


function mergeSort(array, nivelAninhamento = 0) {

    console.log(`Nível de aninhamento: ${nivelAninhamento}`)
    console.log(array)

    if(array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio), nivelAninhamento + 1);
        const parte2 = mergeSort(array.slice(meio, array.length), nivelAninhamento + 1);
        array = ordena(parte1, parte2);
    }
    return array
}

function ordena(parte1, parte2) {
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 =0;
    const resultado = [];

    while(posicaoAtualLista1 < parte1.length && posicaoAtualLista2 < parte2.length) {
        let produtoAtualLista1 = parte1[posicaoAtualLista1];
        let produtoAtualLista2 = parte2[posicaoAtualLista2];

        if(produtoAtualLista1.preco < produtoAtualLista2.preco) {
            resultado.push(produtoAtualLista1)
            posicaoAtualLista1++
        }else {
            resultado.push(produtoAtualLista2);
            posicaoAtualLista2++
        }
    }
    return resultado.concat(posicaoAtualLista1 < parte1.length
        ? parte1.slice(posicaoAtualLista1)
        : parte2.slice(posicaoAtualLista2))
}
console.log(mergeSort(listaLivros));