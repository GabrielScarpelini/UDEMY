/*as promises é pra deixar um sequência de enventos em
cadeia algumas coisas no código, sendo paralelo ao o que
está rolando no resto do código, o promise deixa o o cdg
async */

function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

//resolve: deu bom no Còdigo então resolve ele
//reject: o código deu errp então rejeita ele
function esperaAi(msg, time){
    return new Promise((resolve, reject) => { //params obrigatórios em caso de promises
        if(typeof msg !== 'string') reject(new Error('Erro'))
        setTimeout(() =>{
            resolve(msg) //esse resolve é o gatilh do then
        }, time) 
    })
}
/* por exemplo vamor fazer esses 3 serem chamados em ordem
   sem que altere o os valores do rand

   sempre que for usar as promises tem que usar o construtor
   new Promise*/

esperaAi('Conexão com a Base de Dados', rand(1, 3))
    .then(resposta =>{ //sempre que tiver resolve, esse then será executado
        console.log(resposta)
        return esperaAi('Buscando dados da Base', rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(2222, rand(1, 3)) //aqui forçando o erro pra cair no catch
    })
    .then(resposta => {
        console.log(resposta)
    })
    .then(() =>{
        console.log('Exibindo os dados da base')
    })
    .catch(e =>{ //e o catch é executado pelo rejetct
        console.log('ERRO', e) //esse e pega o que colocamos dentro do reject na func principal
    }) 

console.log('Isso aqui será exibido antes de qualquer promise acima')

/*o promises está fazendo praticamente o papel de funções
de callback */

