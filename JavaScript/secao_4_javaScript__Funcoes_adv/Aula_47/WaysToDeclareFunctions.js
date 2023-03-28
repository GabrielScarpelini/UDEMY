/*Declaração de função (Function hoisting) hoisting eleva a função 
apenas quando a gnt cria a função com o nome 
function que ela pode ser criada dps de usar*/ 

//falaOi()

function falaOi() {
    console.log('olá')
}
//*************************************************************************************************
/* tem como delcarar a função direto na variável, assim as tratando como um dado 
*/
const souUmDado = function(){ //assim atribuindo o que a função retornar a uma variável
    console.log('Sou um dado')
}
souUmDado() //executando como uma função 

//*************************************************************************************************
/*as funções são objetos de primeira classe "First-class objects"
vc pode tratar as funções como dado, tem como passar uma função
como param pra outra assim essa outra vai executar a função e não precisará 
chamar a função por sí só
*/ 

function callFunction(func){
    func()
}
callFunction(falaOi)

//*************************************************************************************************
/*arrow functions, como abaixo, lembrando que dentro dos
parenteses será passado os parametros 
*/

var opaio = () => {
    console.log('sou uma arrow')
}

//*************************************************************************************************
/* dentro de um Objeto, como um método
podendo ser feito como abaixo, ou atribuindo 
o falar a uma função: falar: () +=> {} ou falar: function() {}
ps: sempre que colocar um método, tem que colocar () na frente 
pois ele é uma função*/

const pessoa = {
    falar() {
        console.log('estou falando')}
}
pessoa.falar()

//*************************************************************************************************
/* funçôes anônimas, é tipo o setInterval (function(){})
assim essa funciton foi criada anônimamente, tbm pode ser
setInterval(() => {}) com arrow function */
