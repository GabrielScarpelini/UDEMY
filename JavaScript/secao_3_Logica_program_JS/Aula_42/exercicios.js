// crie uma função que retorne o maior valor entre 2 números

//minha versão
function returnBiggest(num1, num2){
    return Math.max(num1, num2)
}
// solução dele 

function returnBiggest(x, y){
    return x > y ? x : y;
}
//arrow function
const max2 = (x, y) =>  x > y ? x : y;


console.log(max2(356,153))

/** 
 * escreva uma função chamada ePaisagem que recebe dois
 * argumentos, largura e altura de um imagem (number)
 * e retorne true se a imagem estiver no modo paisagem.
 * */
 const ePaisagem = (larg, alt) => larg > alt ? 'Paisagem' : "Retrato"

 console.log(ePaisagem(5000, 199))

 /**
  * escreva um função que recebe um número e 
  * retorne o seguinte:
  * numero divisivel por 3 = Fizz
  * numero divisivel por 5 = Buzz
  * numero divisivel por 3 e 5 = FizzBuzz
  * numero não divisível por 3 e 5 = retorna o próprio número
  * checar se o número e realmente um número 
  * use a função com números de 0 a 100
  */

// function fizzBuzz(num){    
//     for (let i = 0; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log(i, 'FizzBuzz');
//         } else if (i % 3 === 0){
//             console.log(i,'Fizz');
//         } else if (i % 5 === 0){
//             console.log(i, "Buzz");
//         } else if (typeof i !== 'number'){
//             console.log(i); 
//         } else{
//             console.log(i);
//         }
//     }
// }

console.log(fizzBuzz(100))


function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz';
    if (numero % 3 == 0) return 'Fizz';
    if (numero % 5 == 0) return 'Buzz';
    return `Nothing correspond`
}

for (var i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}

