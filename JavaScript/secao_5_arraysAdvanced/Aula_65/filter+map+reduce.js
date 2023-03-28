/* combinação de map + reduce + filters */

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//FORMA 1 
// const pares = numbers.filter(valor =>{
//     return valor % 2 === 0 
// }).map(valor => {
//     return valor *2
// }).reduce((acumulador, valor) =>{
//     return acumulador += valor
// })

//FORMA 2 (simples)
const pares = numbers
    .filter(valor => valor % 2 === 0)                       // 50 80 2 8 22 retorno previsto do filter
    .map(valor =>  valor * 2 )                              // 100 160 4 16 44 retorno previsto do map
    .reduce((acumulador, valor) => acumulador += valor )    // esperado 324 do reduce

console.log(pares)