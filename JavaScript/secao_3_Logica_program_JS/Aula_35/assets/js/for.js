//const div = document.querySelector('#resultado')
const elementos = [
 {tag: 'p', texto: 'Frase 1'},
 {tag: 'div', texto: 'Frase 2'}, 
 {tag: 'footer', texto: 'Frase 3'},
 {tag: 'section', texto: 'Frase 4'},
];

const div = document.querySelector(".resultado")

// function putHTML(lista) {
//     for (let i = 0; i < lista.length; i++){                                         // fez o for do tamanho da lista com 4 elementos 
//         div.innerHTML += `<${lista[i].tag}> ${lista[i].texto} </${lista[i].tag}>`   // aqui foi o comando para jogar dentro da pagina html    
//     }     // repare que os pontos dentro do <> são do indíce i da lista e .object, assim atribuindo o valor a um tipo lá no html                                                         
// }         // no caso essa lista é feita de objects, por isso usa-se o ponto pra anexar no código   
//putHTML(elementos)

let container = document.querySelector('.container')
const diva = document.createElement('div')
for (var i in elementos){
    let {tag, texto} = elementos[i]
    var createTag = document.createElement(tag)
    createTag.innerText = texto
    diva.appendChild(createTag)
}

container.appendChild(diva)

/* na versão dele comentado
o comando appendchild joga pro fínal do trecho que vc pegou, exemplo no cdg below

Dom = Document object model
querySelector pega só a primeira classe que aparece com esse "container"
*/


// const container = document.querySelector('.container');  // aqui ele selecionou o container no documento 
// const divi = document.createElement('div')    // usou a API do DOM p/ criar a div no meio do HTML
// let algo = window.prompt(`coloque algo aqui: `)

// for (let i = 0; i < elementos.length; i++) {
//     let {tag, texto} = elementos[i];   // pegou elementos via desestruturação 
//     let tagCriada = document.createElement(tag); // criou cada tag da lista 
//     let textCriado = document.createTextNode(`${algo} ${i}`); // criou um txt pra ir pro documento
    
//     tagCriada.appendChild(textCriado); // jogou o texto pego na linha 30 pra dentro da tag 
//     divi.appendChild(tagCriada) // cada tag criada ficou na div
// }

// container.appendChild(divi); // aqui na div ele fez o appendChild pra jogar pro container













































