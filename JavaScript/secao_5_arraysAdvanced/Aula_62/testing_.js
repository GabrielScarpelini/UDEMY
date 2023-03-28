id = [
    {nome: 'Astoufo',id: 'consultor_func'},
    {nome: 'Gabriel', id: 'dev_netsuite'},
    {nome: 'Rafael', id: 'dev_netsuite'},
    {nome: 'Adriano', id: 'dev_netsuite'},
    {nome: 'João', id:'consultor_func'},
    {nome: 'Mauricio', id: 'consultor_func'},
    {nome: 'Aléssio', id: 'consultor_func'}
]

var devs = id.filter(valor => valor.id === 'dev_netsuite') 
var consult = id.filter(valor => valor.id === 'consultor_func')

console.log(devs)
console.log(consult)

id.splice(0,0,{nome:'Mike', id:'dev_netsuite'})

console.log(id)