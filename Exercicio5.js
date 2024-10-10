// Escreva uma função que retorne um número fornecido pelo usuário, porém 
// invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
// 578. O argumento da função e o retorno deve ser um valor inteiro.

function numeroInvertido(num){
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(numeroInvertido(8756));