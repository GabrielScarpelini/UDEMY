// dados primitivos são String, number, undefined, null, boolean, symbol  

const nome = 'Gabriel';  //String
const nome1 = "Gabriel"; //String
const nome2 = `Gabriel`; //String

const num1 = 10;     //number
const num2 = 10.54;   // number 

let nomeAluno; // undefined = não aponta pra anywhere da memória 
let sobrenomeAluno = null; // Nulo não aponta pra anywhere da memória
const aprovado = true; // boolean = true, false (lógico)

/* no caso abaixo passa os dados por referência, quando ocorre
   são o push são colocados nos dois arrays o valor */
const array = [1,2]
const Alrey = array
Alrey.push(3)
console.log(array, Alrey) 

console.log(typeof nomeAluno, sobrenomeAluno ) 

// .push faz a função do append do python


