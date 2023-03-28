/*funções imediatas, ow funções auto invocadas
ou em inglês IIFE = Immediately Invoked Function Expression

Para usar automátimente uma função quando ela é criada exemplo
abaixo como pode notar, ela é uma função anônima e por ter os parênteses
no final dela, faz com que ela seja invocada instantâneamente.

Isso ajuda pois dá para criar o código dentro dela e protegê-lo
do escopo global, assim pelo navegador não dará para ter informações
sobre coisas internas do código

e para passar parâmetros basta colocar na função e passálos no último 
PARÊNTESES
*/

(function(peso ,altura){
    var sobrenome = 'Scarpelini'
    const pessoa = {
        nome: 'Gabriel',
        peso: peso,
        altura: altura,
        dama: 'Ariadne',
        tempoJuntos: 'quase um mês'
    }
    function criaNome(nome){
        return `${nome} ${sobrenome}`                          
    }
    function falaNome(){
        console.log(criaNome('Ariadne'))
    }

    function falaNomeLindo(){
        console.log(`${pessoa.dama} ${sobrenome} que nome lindo S2`)    //exmplo usando o escopo léxico
    }
    // var num1 = window.prompt('digite um Número: ')
    // var num2 = window.prompt('digite outro Número:')
    // window.alert(`a multiplicação do 1º pelo 2º é: ${num1 * num2}`)
    // window.alert(`que casal lindo ${pessoa.dama} e ${pessoa.nome} estão juntos a ${pessoa.tempoJuntos}`)
    falaNomeLindo()
    falaNome()
    console.log(2345+"meia"+78
    )
    console.log(pessoa)

})("84kg", "1,80m");

const nome = 'Astolfo' // por estar fora da função auto-invocada vai aparecer no navegador no global scope
