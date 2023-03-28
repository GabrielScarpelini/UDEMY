/* como contatenar arrays 
   o concat é uma solução e ainda tem como concatenar mais coisas 
   sentro do array.
   e tem como concatenar pelo Spread(...) ow rest (...) que é uma "associação 
   por desetruturação"

*/

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = array1 +','+ array2   //exemplo chulo que retorna uma string e não um array

const arrayConcat = array1.concat(array2, [7,8,9], 'Gabriel') //se passar mais coisas como param ele concatena tbmm
                                                              //repare que concatenou + 7,8,9 e meu nome
console.log(arrayConcat)

console.log('*************************************************')

const array4 = [...array1, "Ariadne", ...array2, ...[7,8,9]]   // concatenando pelo spread
console.log(array4)                            // ...aqui espalha o array subsequente, se não esse I será um array