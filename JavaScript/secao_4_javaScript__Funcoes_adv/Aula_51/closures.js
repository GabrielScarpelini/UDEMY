/*closures estão muito relacionados com o escopo léxico,
o console.dir retorna a função mais detalhada no navegador,
essa função "aaa" tem acesso a 3 escopos, o da 'Mãe' dela, 
o dela e o global*/

function retornaFuncao(){     // e o closure é tudo que fecha a função se for mandado o argumento, ele será o closure
    const nome = 'Gabriel'    //closure é a variável definida no escopo da mãe dela
    return function aaa(){
        return nome
    }
}

const funcao = retornaFuncao()
console.dir(funcao) //retorna function (anonymous) pq a função foi retornada sem nome na linha 6

