/*  funções geradoras, tem um trabalho bem específico
    que elas conseguem meio que "pausar" o código,
    preciso "function*" para ser criada.

    É boa para se usar se existe uma "rotina" de 
    processos, onde sempre será repetida ao longo do 
    código
*/
//exemplo 1

function* geradora1(){
    // Código qualquer
    yield "Valor 1"      // cada vez que rodar ira voltar o valor do yield
    // Código qualquer
    yield "Valor 2"
    // Código qualquer
    yield "Valor 3"
}
const g1 = geradora1()
for (var valor of g1){  // for of é para valores, ps dá para fazer isso direto na func
    console.log(valor)
}
// console.log(g1.next().value) // esse objeto next tem duas chaves "value" e "done"
// console.log(g1.next().value) // esse objeto next tem duas chaves "value" e "done"
// console.log(g1.next().value) // esse objeto next tem duas chaves "value" e "done"
// console.log(g1.next()) // esse objeto next tem duas chaves "value" e "done"

// exemplo 2 função infinita(rodei uma vez e chegou a 13M e não parou)

function* geradora2(){
    let i = 0
    while(true){
        yield i
        i++
    }
}

const g2 = geradora2()
// for (var i of g2){
//     console.log(g2.next().value) //assim ela fica infinita
// }

//exemplo 3 uma função geradora que ativa outra função geradora.

function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3()
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4()
for (let valor of g4){
    console.log(valor)
}

//tem como usar as funções de dentro dessa função

function* geradora5(){
    yield function(){
        console.log('vim do y1')
    }
    // treixo de código aqui
    return function(){ // o return acaba o a função
        console.log("vim do return")
    }

    yield function(){
        console.log('vim do y2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
const func3 = g5.next().value // como só tem um yield e o return esse não executará, pela falta das funções

func1()
func2()
func3()
