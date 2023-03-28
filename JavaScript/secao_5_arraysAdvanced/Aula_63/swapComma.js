var valores = ['2,36','8,50','10,99','12,50','19,90']

var point = valores.map(valor => {
    if (valor.includes(','))  valor = valor.replace(/,/g,'.')
    return Number(valor)
})

console.log(point)