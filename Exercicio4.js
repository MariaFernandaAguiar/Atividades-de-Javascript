// Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
// número recebido por parâmetro. Cada resultado na respectiva posição do índice

function tabuada(num){
    let tabuada = 0 ;
    for(let i = 0; i <= 10; i++){
        tabuada += num * i + ' ';
    }
    return tabuada;
}
console.log(tabuada(8))