/* revisão do básico
    DELETE: deleta o valor do index mas o indice
    continua existindo como <1 empty item>.
    .POP: retira o último item do array e pode ser 
    atribuído numa variável.
    .LENGTH: é um atributo que mostra o tamanho da 
    lista não precisa de ()
    .SHIFT: remove o primeiro índice
    .PUSH adiciona no final do array
    .UNSHIFT adiciona no começo
    .SLICE ele divide ao array, até um valor antes do
    2ª parâmetro e o 1ª param é pego normalmente
    .SPLIT divide por um valor repetido
    .JOIN junta os valores de uma lista em string


    exemplo 2 é só uma outra maneira de criar um 
    array, funciona da mesma forma.
*/
//exemplo 1 forma literal de criar

const nome = ['Eduardo', 'Maria', 'Joana']
nome[2] = 'João'                          //alterou o index 2 
delete nome[2]                            //deletou o index 2
console.log(nome)
console.log("*********************************************************")

//exemplo 2


/* tem a passagem de valores por referência
assim alterando o array inicial junto com
o segundo, com o spread o valor é copiado
mas o outro array aponta a outro lugar da memória
*/

const nomes = new Array('Eduardo','Maria', 'Joana')
const novo = [...nomes]    //spread operator (...) copia o conteúdo de uma pra outra

console.log(nomes)
console.log(novo)
novo.push('aaa')          //exemplo de push
novo[0] = 'Mike'
console.log(nomes)
console.log(novo)

console.log("*********************************************************")
console.log(novo.length) // é um atributo, então no usa os ()

console.log("*********************************************************")
var mena = novo.pop()    // o pop remove e dá para atiuir numa variável
console.log('esperado', mena)        // retultado esperado aaa

console.log("*********************************************************")
console.log(nomes)
nomes.shift()   // remove do começo
console.log(nomes)
nomes.unshift('gabs') // adiciona no começo
nomes.unshift('Bruno') // adiciona no começo
nomes.unshift('Fabrício') // adiciona no começo
console.log(nomes)

console.log("*********************************************************")

var umTrexo =  nomes.slice(0,2)  // o slice vai até um antes do 2º param, no caso vai pegar o index 0 e 1 
var ultimo = nomes.slice(0,-2)   // pega além e o valor do 1º param mas tira até antes do valor do último
console.log(nomes)               // acima ele vai até o -2 mas é na ordem e não de trás pra frente
console.log(umTrexo)
console.log('esperado',ultimo) //resultado esperado [ 'Fabrício', 'Bruno', 'gabs']

// como converter uma string num array

console.log("*********************************************************")
const Name = 'Gabriel Scarpelini Pavia'
var NSobrenome = Name.split(' ')            //ele separa a cada incidência do espaço ou o que for passado no ()
console.log(NSobrenome)

console.log("*********************************************************")
const NomeCompleto = NSobrenome.join(" ")  // o que for no meio vai entro dos parenteses, se não fica a virgula
console.log(NomeCompleto)