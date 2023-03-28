/* filtrando os valores de um array 

   funções para array Filter, map, reduce, forEach

   filter precisa de uma função de callback 
   ele responde aos booleans, se true ele 
   pega o valor, se false ele passa adiante 
   ou executa a função do if else, o proprio 
   filter já corre o array.
   Se passar os parametros indice e array, o filter
   interage com eles, retornando o indice e o array
   completo
   .filter((valor, indice , array) =>{}) ex linha31
   o que o filter sempre retornará um array

   FUNÇÃO ENDS WITH E TOLOWERCASE ################# 
   endsWith pega a última letra da string 
   to Lower case deixa tudo minúsculo
   
   */
//               0   1   2  3  4  5  6  7  8   9  10  11  12
const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numBiggerThanTen = [50, 80, 11, 15, 22, 27]

function callBackFilter(valor){ // forma longa para enteder como funfa
    return valor > 10           // fazer assim já retorna o boolean necessário
                                // se for usar isso em mais de um local crie assim, se não pode fazer como abaixo
}                               // não precisa colocar os () por o filter já executa a função

const NumerosFiltrados = numbers.filter((valor, indice , array) => { // aqui usando o indice e o array
        console.log(`${valor} no indice ${indice}, do array [${array}]`)
        return valor > 10 
}) 
// const NumerosFiltrados = numbers.filter(valor => valor > 10) //aqui a forma direta sem chaves nem return
// console.log(NumerosFiltrados)


console.log('******************************************************')

//abaixo um exmeplo de OBJ
const lista = [
    {nome: 'Gabriel',turma: 'ADS3A',idade: 24},
    {nome: 'Bruno', turma: 'ADS3A', idade: 25},
    {nome: 'Mike', turma: 'SI3A', idade: 30},
    {nome: 'Julio', turma: 'SI3A', idade: 18},
    {nome: 'Astoufo', turma: 'ADS3A', idade: 19},
    {nome: 'Mikinho', turma: 'SI3A', idade: 25},
]

var foi = lista.filter(valor => valor.turma === "SI3A") // pegando pela turma
console.log(foi)

console.log('******************************************************')

var Number6 = lista.filter(valor => valor.nome.length >= 6) // pegando pela qnt de letras do Name
console.log(Number6)

console.log('******************************************************')

var letterl = lista.filter(valor => valor.nome.toLowerCase().endsWith('l'))   //função pra pegar com que letra acaba
console.log(letterl)
