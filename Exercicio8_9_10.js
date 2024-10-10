// Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
//  idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
//    de nomes pré-definida; e gere idades entre 18 e 90 anos

// Nome para gatos
let nomesLista = ['Amora Stefany','Julio Augusto Cesar', 'Fred Wilson', 'Catenga', 
'Bruce Willian', 'Britinha', 'Summer', 'Sky', 'Shine','Mona', 'Zé pretinho', 'Fumaça', 'Shakira','Creuza'];

function gerarLista(num){
    let lista = [];

    for (let i = 1; i <= num; i++) {
        let id = i;
        let nome = nomesLista[Math.floor(Math.random() * nomesLista.length)];
        let idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;
        
        lista.push({id, nome, idade});
    }

    return lista;
}

// Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
//  média de idades das pessoas presentes na lista.

function mediaIdades(obj){
    idades = obj.map(obj => obj.idade)
    const soma = idades.reduce((soma, idade) => soma + idade, 0);
    return soma / idades.length
}

// Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
// dados por um dos atributos informados por parâmetros

function ordenarLista(lista, atributo) {
    return lista.sort((a, b) => {
      if (a[atributo] < b[atributo]) return -1;
      if (a[atributo] > b[atributo]) return 1;
      return 0;
    });
  }

  
let listaObjetos = gerarLista(5);
console.log("Gerando lista de pessoas:");
console.log(listaObjetos);
console.log("\n Idade média: " + mediaIdades(listaObjetos));
console.log("\n Lista Ordenada: ");
console.log(ordenarLista(listaObjetos, 'nome'));
