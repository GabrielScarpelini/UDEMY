/*
 let tem escopo de bloco, ow seja ele pode ser redeclarado de novo em outro bloco,
 mas se não for usado dentro desse bloco e sim no bloco de fora, será usado o valor
 do bloco que ele foi usado.
 var só tem escopo de função, ow seja independente de onde esteja, o único lugar o 
 valor não vai mudar é dentro da função, de resto ele altera, dentro de if e blocos

 "var", e usando a palavra function acontece o roiching que a eleva para o topo do arquivo 
 assim podendo ser declarada dps  da instrução de usar, assim que for chamada a var e não foi 
 passado valor antes de ser usado será o resultado undefined: exemplo, já com o let ele retornaria 
 um erro de não declarado.

 console.log(sobrenome)

 var sobrenome = 'Scarpelini'

 o Let não, ele não permite ser chamado antes de ser 

 sendo assim, o único escopo que será usado o valor do let será se for usado no mesmo bloco
 o var pode ser usado e redeclarado sempre.
*/
 const verdadeira = true;

let nome = 'Luiz';                 //criando a variável
var nome2 = "luiz";                //criando a variável 
 
if(verdadeira) {
    let nome = "Otávio"            // criando
    var nome2 = "Luiz"             // redeclareando

    if (verdadeira) {
        let nome = 'Outra coisa'    // criando
        var nome2 = 'Otávio';       // redeclarando
        console.log(nome,nome2)
            
    }   
}

let rafa = 'ele alí', gabriel = 'eu aqui';
const data = new Date()
let date = data.toString()
console.log(date)