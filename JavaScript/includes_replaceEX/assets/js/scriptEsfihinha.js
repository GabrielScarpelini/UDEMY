var listaEsfihas = []
var total = 0
const div = document.querySelector('.container')

var iniciar = window.confirm('deseja pedir esfihinhas ?? *---*')
while (iniciar !== false){
    var sabores = window.prompt('coloque o sabor:')
    var valor = window.prompt('qual o valor da esfiha escolhida ?')
    if (valor.includes(',')){
        valor = valor.replace(/,/g,'.')
    }
    var quantidade = window.prompt('quantas ?')
    var esfiha = {
        valor: Number(valor),
        sabor: sabores,
        quantidade: quantidade
    }
    listaEsfihas.push(esfiha)
    var iniciar = window.confirm('deseja continuar adionando ?')
}
for(var i in listaEsfihas){
    var valorInd = listaEsfihas[i].valor * listaEsfihas[i].quantidade 
    total += listaEsfihas[i].valor * listaEsfihas[i].quantidade
    div.innerHTML += `<p> <strong>SABOR: </strong>${listaEsfihas[i].sabor} <strong>QUANTIDADE: </strong>${listaEsfihas[i].quantidade} <strong>VALOR: </strong>${valorInd.toFixed(2)}</p></br>`
}
var drinkSmt = window.confirm(`irão beber algo  ?`)
while(drinkSmt !== false){
    var bebida = window.prompt(`o que será ?`)
    var contador = 0
    contador += 1
    var valueDrink = window.prompt('Valor:')
    if (valueDrink.includes(',')){
        valueDrink = valueDrink.replace(/,/g, '.')
    }
    div.innerHTML += `<p>${contador}ª bebida: ${bebida} valor: ${valueDrink} </p></br>`
    total += Number(valueDrink)
    drinkSmt = window.confirm('Algo mais ?')
}

div.innerHTML += `<p> TOTAL DO PEDIDO: R$${total.toFixed(2)}</p></br>`
div.innerHTML += `<h1> BOM APETITE PESSOAL!!!<h1>`