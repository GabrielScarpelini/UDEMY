/*a Map irá alterar valores no Array, assim retornando
  um array do mesmo tamanho do original porém os valores 
  alterados,
  Map tem os mesmos atributos do filter, vai retornar 
  um array, precisa da função e callBack, tendo como os 
  parametros o valor o indice e o array,
  no caso com objetos, ele altera o valor original
  para evitar isso faça como a linha 61
  para não alterar o obj inicial sempre faça um newObj como abaixo*/

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobrados = numbers.map(function(valor, indice, array){
    console.log(`${valor} o indice é ${indice} e o array é ${array}`)
    return valor * 2
})
console.log(dobrados)

console.log('**********************************************************')

const nomeAtras = numbers.map(valor => `Gabriel ${valor}`) // pra zoar foi colocado meu nome atras dos valores
// mostrando que é possível fazer isso
console.log(nomeAtras)
console.log('**********************************************************')

const lista = [
    {nome: 'Gabriel',turma: 'ADS3A',idade: 24},
    {nome: 'Bruno', turma: 'ADS3A', idade: 25},
    {nome: 'Mike', turma: 'SI3A', idade: 30},
    {nome: 'Julio', turma: 'SI3A', idade: 18},
    {nome: 'Astoufo', turma: 'ADS3A', idade: 19},
    {nome: 'Mikinho', turma: 'SI3A', idade: 25},
]
//retorne apenas uma string com o nome da pessoa
var nomes = lista.map(objeto => objeto.nome)
console.log(nomes)

console.log('**********************************************************')
//remova apenas a chave nome do objeto

// var semNome = lista.map(objeto => {   // aqui fazendo para cada valor do obj
//     return {idade: objeto.idade,      // pela arrow daria errado ex de arrow para both. line42
//             turma: objeto.turma}
// })

// var noName = lista.map(obj => ({idade: obj.idade, turma: obj.turma})) //pra não dar conflito entre as chaves do obj
                                                                         //colocar entre parênteses
// console.log(noName)

var semNome = lista.map(objeto => {     // aqui está literalmente deletando a chave (nesse caso é melhor
    const newObj = {...objeto}          // criando outro obj pra não mudar o primeiro
    delete newObj.nome                  // pois temos 3 chaves e não duas como o ex dele)
    return newObj
})
console.log(semNome)

console.log('**********************************************************')

//adicione uma chave id 
var id = lista.map((obj, indice) =>{ //adicionando o ID
    const newObj = {...obj}
    newObj.id = (indice + 1)
    return newObj})

console.log(lista)
console.log(id)