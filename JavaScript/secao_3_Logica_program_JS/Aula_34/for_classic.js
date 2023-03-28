/* For, coisa ninda 


*/
// console.log('Linha 0')
// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')
// console.log('Linha 5')

// for (let i = 400; i <= 10000000; i += 125) {
//     const par = i % 2 === 0 ? 'par' :'impar';
//     console.log(i,par)

// }

const frutas = ["maçã", "pêra", 'Melância', "abacate", "abacaxi", "uva", "lixia", "asdrubal"];

for (let i = 0 ; i < frutas.length; i++) {
    console.log(`índice ${i}`, frutas[i]);
}

for (let i in frutas){
    console.log(`num do index: "${i}" e valor:"${frutas[i]}"`)
}

