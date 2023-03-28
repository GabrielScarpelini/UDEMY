/* tem como pegar coisas do escopo global 
e usar dentro de uma função, sendo isso
o escopo léxico, pegar coisas do "vizinho" (escopo global)
e usar dentro de uma função*/

const name = 'Gabriel'

function falaNome(){
    //const name = 'Gabiru'   // a função buscou dentro dela e achou o name se não ela olha o escopo global
    console.log(name)
}
function usaFalaNome(){
    const name = 'Gabiru'// nesse caso, a função continua peegando o escopo léxico (vizinhos) de onde foi declarada 
    falaNome()           // e não da função que chamou
}
usaFalaNome()