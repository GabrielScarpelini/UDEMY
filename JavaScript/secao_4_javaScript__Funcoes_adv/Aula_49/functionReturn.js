/* essa aula é referente ao return de uma função
Return acaba a função. Por exemplo se colocar um 
console.log() dentro da função, não será o retorno
a função apenas executará o console.log()
*/
//exemplo 1 return

function soma(a,b){
    // console.log(a+b)                  // aqui se for usado, não será o return da func
    return a + b
}

/* exemplo de funções que não retornarão nada, 
só executará algo, o ex 1 altera o documento 
para vermelho quando um click o corre na página */

//exemplo 1 está comentado pois não existe um document aqui no vs code, assim gerando erro
// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red'
// })

/* retorno de função como objeto, se o nome o parâmetro 
for o mesmo nome do objeto de retorno, não precisa definir
chave e valor*/

function criaPessoa(nome, sobrenome, idade, mozao){
    return { nome, sobrenome, idade, mozao }
}

var eu = criaPessoa('Gabriel', 'Scarpelini', 23 + 1, "Ariadne S2")
console.log(`${eu.nome} ${eu.sobrenome} tenho ${eu.idade} e minha mozão é a ${eu.mozao}`)

//outro objeto criado a mão, como notamos a função é bem mais prática

var vc = {
    nome: "Ariadne",
    sobrenome: "Oliveira",
    idade: 25,
    mozao: 'Gabriel S2'
}
console.log(eu,vc)

/*tem como uma função criar outra função, e é possivel
usar o parâmetro de uma função externa na interna (ex 1)
 */

// exemplo 1

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto             //essa função será atribuida a Váriavel oláMundo
}
/* como a variável virou a função de dentro,
pode passa o parametro dela chamando pela variável
*/
const olaMundo = falaFrase('Olá')
console.log(olaMundo('Mundo!'))   // aqui é um exemplo 

const fala = falaFrase('Olia')
const resto = fala('resto')
console.log(resto)

/* exemplo de funções "aninhadas" assim atribuindo 
os valores a variáveis, sendo a variável acessando a 
closure da função interna.
quando atribui a função a uma variável, está fazendo o fechamento da closure
da função interna dentro da função
 */

function criaMultiplicador(multiplicador){
    // multiplicador está nessa outra closure
    return function(n){
        return n * multiplicador
    }
}
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
console.log(duplica(3))
console.log(triplica(4))
console.log(quadriplica(5))
