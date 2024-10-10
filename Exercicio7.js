// Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
// a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
// “(([]))” retorna true, “(([)])” retorna falso

function sequencia(valor){
    let pilha = [];
    for (let caractere of valor) {
        if (caractere === '(' || caractere === '[') {
            pilha.push(caractere);
        } else if (caractere === ')') {
            if (pilha.pop() !== '(') {
                return false;
            }
        } else if (caractere === ']') {
            if (pilha.pop() !== '[') {
                return false;
            }
        }
    }
    return pilha.length === 0;
}

console.log(sequencia("(([]))"))
console.log(sequencia("(([)])"))