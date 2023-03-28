/*REDUCE 
  reduzindo o array, exemplo, reduzir o array em um
  elemento apenas, ele é muito versátil.
  Recebe os mesmos params Map e filter, porém ele agora
  recebe um acumulador "acum", ele é mais usado para reduzir 
  um array em um elemento mesmo
*/

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]  

// para voltar a soma de todos esses números
const total = numbers.reduce(function(acum, valor , indice, array){ // esperado 236
    acum += valor
    console.log(acum, valor)
    return acum
},0)                                                            //valor inicial para o acumulador

console.log(total) // retorna certo

console.log('*****************************************************')

//retornando um array com os pares fazer isso com o filter por ser um array
const par = numbers.reduce(function(acum, valor , indice, array){
    if (valor % 2 === 0) acum.push(valor)
    return acum
},[])                                                   // é pra retornar um array, por isso foi passado um aqui

console.log(par) // esperando 50 80 2 8 22

console.log('*****************************************************')

//retorne um array com o dobro dos valores fazer isso com o Map por ser um array
const dobro = numbers.reduce(function(acum, valor , indice, array){
    acum.push(valor * 2)
    return acum
},[])                                                  // é pra retornar um array, por isso foi passado um aqui

console.log(dobro) // esperado [10, 100, 160, 2, 4, 6, 10, 16, 14, 22, 30, 44, 54] 

console.log('*****************************************************')

//retorne a pessoa mais velha, para obj não colocar o acumulador com 0

const lista = [
    {nome: 'Gabriel',turma: 'ADS3A',idade: 24},
    {nome: 'Bruno', turma: 'ADS3A', idade: 25},
    {nome: 'Mike', turma: 'SI3A', idade: 30},
    {nome: 'Julio', turma: 'SI3A', idade: 18},
    {nome: 'Astoufo', turma: 'ADS3A', idade: 19},
    {nome: 'Mikinho', turma: 'SI3A', idade: 25},
]

const theOldest = lista.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador
    return valor  //não sei pq diabos precisa ter 2 returns pra funcionar
})

console.log(theOldest) // esperado {nome: 'Mike', turma: 'SI3A', idade: 30} 