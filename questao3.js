/**Questão 3: Crie um vetor com 10 elementos e remova o último elemento e imprima
a matriz sem o elemento removido em JavaScript? */

let meuArray = [];

meuArray.push(1);
meuArray.push(2);
meuArray.push(3);
meuArray.push(4);
meuArray.push(5);
meuArray.push(6);
meuArray.push(7);
meuArray.push(8);
meuArray.push(9);
meuArray.push(10);


//
let elementoRemovido = meuArray.pop();

console.log(elementoRemovido);
//
console.log(meuArray);