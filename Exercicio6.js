// Escreva uma função que permita contar o número de vogais contidas em uma string
//  fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
//  retorna o número 3 (há 3 vogais nessa palavra)

function contaVogal(palavra){
    let vogais = palavra.match(/[aeiouAEIOU]/g);
    return vogais ? vogais.length : 0
}

console.log(contaVogal('Maria Fernanda'));