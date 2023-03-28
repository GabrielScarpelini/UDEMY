/* funções construtoras, tanto as funções fábrica
quanto as construtoras criam novos objetos, a única diferença
entre elas é que a contrutora cria o objeto automáticamente,
enquanto a fabrica é uma função normal que pode ou não retornar um obj.

Essas 2 funções são moldes para geras objs

construtora precisamos sempre iniciar seu nome com
letra maiúscula, se ver uma função com a 1ª captal letter
quando for iniciar tem que colocar a palavra new

A palavra "new" cria um novo objeto vazio
ela faz o "this" apontar pra esse objeto vazio
e faz retornar implícitamente um obj na variável 
atribuida

ex de contrutora
construtora -> Pessoa (new)
*/

//exemplo 1 como criar uma função construtora

function Pessoa(nome, sobrenome){  //sempre com a 1ª letra maiúscula
    //const deixa atributos e métodos privados
    const id = 123456   //o id não ficará liberado fora do obj, não da pra pegar usando .id, retornará undefined

    const metodoIntero = () => {   // metodo internos é útil para fazer algo interno na função
    }

    
    // this transforma atributos e métodos públicos
    this.nome = nome,
    this.sobrenome = sobrenome,

    this.metodo = function(){
        console.log( this.nome + " " + 'entrou no metodo')
    }
}

const p1 = new Pessoa('Gabriel' , 'Scarpelini') //NUNCA JAMAIS ESQUEÇA DE USAR A LETRA MAIÚSCULA
const p2 = new Pessoa('Ariadne' , 'Oliveira')   //NUNCA JAMAIS ESQUEÇA DE USAR A LETRA MAIÚSCULA

console.log(`${p1.nome} ${p1.sobrenome}`)
console.log(`${p2.nome} ${p2.sobrenome}`)
p1.metodo()
p2.metodo()

//EXERCÍCIO: CONVERTER A AULA 55 DE FUNCTION FABRICA PARA CONSTRUTORA