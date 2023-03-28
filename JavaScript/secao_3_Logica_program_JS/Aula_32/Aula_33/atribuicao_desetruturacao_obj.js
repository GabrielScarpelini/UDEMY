// const pessoa = {
//     //nome: 'Luiz',       o nome não existe no obj
//     sobrenome: 'Miranda',
//     idade: 30,
//     endereco:{
//         rua: 'AV Brasil',
//         numero: 320
 

const pessoa = {
    nome: 'Gabriel',       
    sobrenome: 'Miranda',
    idade: 30,
    endereco:{
        rua: 'AV Brasil',
        numero: 320
    }
}

//atribuição via desestruturação
const { nome: issai , sobrenome, idade } = pessoa;  // atribuiu outro valor pra ser o nome issai é a variável 
console.log(pessoa.nome, sobrenome, issai, idade); 
/* ps, pode usar o nome do atributo como uma variável por isso que
tem a variáveis com sobrenome e idade, se não fizer desse forma, pra
acessar esses atributos, ficaria :
console.log(pessoa.nome, pessoa.sobrenome, issai, pessoa.idade); 
*/

const { endereco: { rua: str,  numero: num },...tudo } = pessoa; // endereço puxa todo o obj endereço   
                                              // "endereco:"" vc acessa os atributos dele 

console.log(str,num,tudo);
