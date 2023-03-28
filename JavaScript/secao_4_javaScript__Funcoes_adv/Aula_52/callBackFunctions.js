/* funções de callback, colocado o setTimeOut
que carrega uma função de callback e assim
estipulando tempo para a execução das funções.

As funções de callBack quase sempre são usadas
dentro de outras funções, como o exemplo da linha 18
assim executando f2 dentro de f1 "Calling" the 
function f2 */

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}
console.log(rand())

/* função criada como um "timer" para a função setTimeOut */

function f1(callback){
    setTimeout(function(){                  //essa funtion aqui dentro já é uma função de callBack
        console.log('f1')
        if(callback) callback()
    }, rand())
}

function f2(callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback()
    }, rand())
}

function f3(callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback()
    }, rand())
}


/* esse treicho abaixo mostra funções de callback 
ativando outras funções assim fazendo que elas sejam ativadas
em ordem correta, e assim usando as funções anônimas. */

f1(function(){
    f2(function(){
        f3(() => {
            console.log('Olá Mundo!')
        })
    })
})

//console.log('Olá mundo!') //com os timeout definidos, esse será o primeiro a ser executado 

/* aqui outro exemplo de como fazer o trecho acima
só que sem a função anônima e sem fazer uma "árvore
de natal", PS COMO É DENTRO DA FUNÇÃO QUE A FUNÇÃO DE
CALLBACK É CHAMADA, QUANDO COLOCA ELA COMO UM ARGUMENTO
PRA FUNÇÃO, NÃO SE DEVE COLOCAR OS PARÊNTESES*/

f1(f1callBack)

function f1callBack(){
    f2(f2callBack)
}
function f2callBack(){
    f3(f3callBack)
}
function f3callBack(){
    console.log('Hello Word!');
}