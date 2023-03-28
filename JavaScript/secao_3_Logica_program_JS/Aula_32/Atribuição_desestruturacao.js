/*
A atribuição via desestruturação consiste em trocar o valor de uma lista de variaveis
por outra lista sem que mude as variáveis 

no caso do let ali em baixo há uma operador que é usado para pegar o resto
usando a sintaxe ...[o nome do índice]  

esse operador ... pode ter dois significados ...rest (pega o resto de um array)
e ...spread (que tem a função de distribuir)
*/
// let a = 'A';
// let b = 'B';
// let c = 'C';

// numeros = [1,2,3];  // atribuiu o valor de numeros a um array
// [a, b, c] = numeros

// console.log(a, b, c);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// let [um, dois, tres, ...continuacao] = numeros;
// //AQUI EXEMPLOS DO REST 
// console.log(um, dois, tres);
// console.log(continuacao);

// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres, , cinco, , sete] = numeros
// console.log(um, tres, cinco)
// AQUI ELE PULOU ALGUNS ESPAÇOS USANDO UM ESPAÇO VAZIO(, ,) ASSIM AVAN
//ÇANDO PARA O PRÓXIMO INDEX

const numeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const [,[, ,seis]] = numeros   //uma forma ruim de pegar lista dentro de listas 
let six = numeros[1][2]
console.log('valor do six', six);   
console.log(numeros[1][2]);   
console.log(seis);
