/* metodo splice: essa função altera o array
   original como "pop" e "push", pode retonar 
   um elemento atribuindo a uma váriavel, porém
   esse elemento será uma lista, pois o splice 
   pode remover + de 1 elemento de uma vez

   primeiro param o index onde irá ocorrer 
   ow começar a ação, o segundo será quantos 
   indices que irá remover, contando o valor do
   primeio param, do 3º em diante, será adiciona-
   do no array
*/

const nomes = ['Gabriel', 'Ariadne', 'Andreia', 'Cristina', 'Cesar', "Antônio"]
//exemplo: nomes.splice(inicio, delete, adiciona1, adiciona2)

console.log(nomes)
const removidos = nomes.splice(4, 2) // remove o index 4 e a partir dele  
console.log(nomes, removidos)

console.log("***************************************************************")
//tem como fazer com indices negativos
//               -6         -5          -4        -3         -2        -1 
//                0          1           2         3          4         5
const nome = ['Gabriel', 'Ariadne', 'Andreia', 'Cristina', 'Cesar', "Antônio"]

//const removed = nome.splice(-3, 3) // aqui será removido 3 para a direita, contando o -3
const removed = nome.splice(-3, Number.MAX_VALUE) // essa função vai até o maior número do index
                                                  // assim removento o -3 até o final
console.log(removed, nome)

console.log("***************************************************************")

//aqui sem tirar nenhum index e adicionando outro 

const names = ['Ariadne','S2','Gabriel']
// exemplo abaixo colocando no primeiro índice o 0 também funcionaria
names.splice(-(Number.MAX_VALUE), 0, 'MEU MOZÂO', 'VIDA', 'PERFEITA', 'DENGOSA') //adiciona no index colocado no 1º param  
console.log(names)

console.log("***************************************************************")

//como remover um item e adicionar outro no lugar 

var lista = ['Mike', 'Brian', 'Toretto', 'Romam Pierce']    //aqui brian e toreto foram alterados
lista.splice(1, 2, 'Gabriel', 'Fabrício')   //pois aqui foi colocado apartir do I1 pra add 2 nomes,assim alterou os acima
console.log(lista)

// var ultimo = lista.splice(-1,1) // exemplo de pop
// console.log(lista, ultimo)

// var primeiro = lista.splice(0,1) //exemplo do shift
// console.log(lista, primeiro)

// lista.splice(0, 0, 'Opaio') // exemplo de unshift
// console.log(lista)

// lista.splice(Number.MAX_VALUE, 0, 'mein Konig') // exemplo de push
// console.log(lista)