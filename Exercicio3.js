// Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
// multiplicação e divisão e retorne o resultado da operação.
// Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
// a operação informada é válida. Retorne nulo para os casos de erro.

function operacoes(num1, num2, operacao){
    if(operacao == "adição"){
        return num1 + num2;
    }else if(operacao == "subtração"){
        return num1 - num2;
    }else if(operacao == "multiplicação"){
        return num1 * num2;
    }else if(operacao == "divisão"){
        if(num1 && num2 != 0)
            return num1 / num2;
        return null;
    }
    return 'Operação inválida';
    
}

console.log(operacoes(5,2,'adição'))
console.log(operacoes(5,2,'subtração'))
console.log(operacoes(5,2,'multiplicação'))
console.log(operacoes(5,2,'divisão'))
console.log(operacoes(5,0,'divisão'))