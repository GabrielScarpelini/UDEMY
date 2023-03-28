
const frutas = ['Pera', 'Maçã', 'Uva'];

/*for(let i in frutas) {         // forma igual python 
    console.log(frutas[i]);
}*/

let nome = 'Gabriel Scarpelini Pavia'
var espacos = nome.replaceAll(" ", "").length
console.log(espacos)

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Scarpelini',
    idade: 23
};

console.log(pessoa.nome);
const chave = 'nome'
console.log(pessoa[chave]);   // outra forma de acessar o obj


for (let i in pessoa){
    console.log(`${i}: ${pessoa[i]}`);
}