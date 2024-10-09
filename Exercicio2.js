// Escreva uma função que retorne uma String contendo uma sequência de N mensagens do texto informado pelo usuário. O valor de N e a mensagem são informados por parâmetro.
function retornaMensagem(mensagem, qtd){
    let result = '';
    for (let i = 0; i < qtd; i++) {
        result += mensagem + ' ';
    }
    return result.trim();
}

console.log(retornaMensagem('Miau', 7))