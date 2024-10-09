// Escreva uma função que calcule e retorne o fatorial de um número
function fatorial(num){
    if(num == 0){
        return 1;
    }
    else{
        return num * fatorial(num - 1);
    }
}

function fatorial2(num){
    return num == 0 ? 1 : num * fatorial2(num - 1);
}
console.log(fatorial(7));
console.log(fatorial2(7));

