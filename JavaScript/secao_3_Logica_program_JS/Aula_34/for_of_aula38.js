/**
 * for classico = geralmente com iteráveis (array ow strings)
 * for in = retorna o indice ow chave (string, array ou object)
 * for of = retorna o valor em si (iteráveis, arrays ow strings)
 */


const nomes = ['Gabriel', 'Scarpelini', 'Pavia'];
const nome = 'Gabriel'

for (let i = 0; i < nomes.length; i++){
 console.log(nomes[i])
}
console.log('###################')

for (let i in nomes) {
    console.log(nomes[i])
}
console.log('###################')

for(let valor of nome){
    console.log(valor);
}

console.log('###################')

nomes.forEach(function(valor, indice, array) {  // terá aula específica
    console.log(valor, indice, array)
});              


const pessoa = {
    nome: 'Luiz',
    sobrenome: "Otávio"
}
for (let chave in pessoa) {
    console.log(chave)
}