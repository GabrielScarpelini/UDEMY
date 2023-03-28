/* funções fábrica: funções que retornam objetos
sendo uma função um método dentro do objeto e não 
um atributo, tendo tbm os metodos getter e setter

temos também a Constructor function (função construtora)

sempre que chama um método, quem chamou que é o this
se referindo ao valor do objeto inteiro.

exemplo 1 é uma função fábrica
*/

//exemplo 1 
function criaPessoa(nome, sobrenome, altura , peso){
    return {
        nome,
        sobrenome,
        altura,
        peso,
        fala(assunto){                                     // outra forma de fazer um método
            return `${this.nome} está falando ${assunto}.`
        },
        //getter serve só para obter um valor
        get imc(){                                          //quando usa o get o método quando é chamado passa a
            const indice =  this.peso / (this.altura ** 2)  //ser um "Atributo" não precisando dos parênteses
            return indice.toFixed(2)   
        },
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ') //após este comandoo valor vira um array
            this.nome = valor.shift() // tira do começo de um array
            this.sobrenome = valor.join(' ') // o join pega os valores do array e junta com o que
                                             // for passado no parênteses
        }
    }
}

const p1 = criaPessoa('Gabriel','Scarpelini', 1.8, 84)  // no caso o p1 será o this da função
// console.log(p1.imc)   // o exemplo do get
// console.log(p1.nome)
// console.log(p1.sobrenome)
// console.log(p1.altura) 
// console.log(p1.peso)
p1.nomeCompleto = 'Ariadne Cristina Oliveira'
console.log(p1.nomeCompleto) // outro exemplo do get
console.log(p1.fala('um dia friooooo'))



