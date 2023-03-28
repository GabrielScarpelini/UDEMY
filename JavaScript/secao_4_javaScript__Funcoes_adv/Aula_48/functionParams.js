/* essa aula será de parâmetros de funções

os params são mandados dentro dos parenteses da função 
separados por virgula, se a função não tiver parametros 
mas se vc passar eles quando chamar a função eles vão 
ficar armazenados em "arguments", assim ele se torna uma list
ISSO SÓ É VALIDO QUANDO A FUNÇÃO É DECLARADA COM "FUNCTION"
se passar menos argumentos do que os parametros da função 
eles retornarâo undefined,

se estiver comentado é só descomentar para testar
*/

function funcao(){
    var total = 0 
    for (var i in arguments){
        total += arguments[i]
    }
    console.log(total)
}

funcao(2,34,5,6)
console.log('************************************************************************************')

//*************************************************************************************************
/* se criar a função com parametros, vai passar por 
posição, porém o arguments ainda salvará o valor,
todos os parametros sempre vão para arguments */

function funcaum(a, b, c){
    var total = 0 
    for (var i in arguments){
        total += arguments[i]
    }
}

funcaum(2,34,5)
console.log('************************************************************************************')

//*************************************************************************************************
/* se passar a função, for para fazer soma de dois números
e algum deles não for passado, ele voltará como NaN pois
seria um número + undefined: mas há formas de evitar isso 
 */

function soma(a, b){
    a = a || 0                        // forma antiga
    b = b || 0
    console.log(a + b)
}

function sum(a = 0, b = 0){        //aqui setou o valor padrão
    console.log(a + b)
}
sum(2)
console.log('************************************************************************************')

//*************************************************************************************************
/*para pular valores em argumentos passados, tem que enviar
  undefined
*/

function summarize(a, b = 4, c = 10){
    console.log(a+b+c)
}
summarize(10, undefined ,11)     //por ter pulado o B ele assumiu o valor padrão. esperado 25
console.log('************************************************************************************')

//*************************************************************************************************
/* tem como passar argumentos fazendo por atribuição por desestruturação */

function opaiu({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
opaiu({nome: 'Gabriel', sobrenome: 'Scarpelini', idade:23 + 1})

// e tem como fazer por array tbm 

function opaio([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}
var lista = ['Gabriel', 'Scarpelini', 23+1]

opaio(lista)
console.log('************************************************************************************')

//*************************************************************************************************

/* o  parametro do resto tem que ser o último parametro passado
por que se não gerará um erro. Lembrando que arguments
só existe quando a função é definida com a palavra funciton,
porém tem como pegar os argumentos pelo rest operator (...)

exemplo a baixo é uma arrow function que retorna os 
argumentos passados pelo rest operator*/

const conta = (operador, acumulador = 0, ...numeros) => {
    for (var i in numeros){                  // var i of numeros volta o valor direto sem colocar [i]
        if (operador === "+") acumulador += numeros[i]
        if (operador === "-") acumulador -= numeros[i]
        if (operador === '*') acumulador *= numeros[i]
        if (operador === '/') acumulador /= numeros[i]
    }
    console.log(acumulador, numeros)
}

conta('*', 1, 2,3,4,5)                        //no * tem que mudar o acumulador para 1
