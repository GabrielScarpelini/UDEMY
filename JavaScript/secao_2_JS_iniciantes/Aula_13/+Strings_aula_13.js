let uma = "Gabriel O Scarpelini O um dia tatto"
// colocar duas barras invertidas, escapa o caracter da str \algo aqui\
// console.log("uma\"STRING\"") sempre com aspas fora 

// assim mostrando suas aspas de abertura útil para quando precisa usar duas aspas dentro da str

//  é indexável 
console.log(uma[4]);                                 // comando usado para acessar o Índice da lista de carac     
console.log(uma.charAt(6));                          // aqui outra forma de pegar o ìndice da cadeia de carac  
console.log(uma.concat(' em um dia'));               // faz a função do concatenar
console.log(`${uma} em um lindo dia`)                // versão com template string 
console.log(uma.indexOf('Gabriel'));                 // mostra onde se inicia a palavra texto, se foi -1 o I é pq não tem nada 
console.log(uma.lastIndexOf('O', 3));                // vai buscar de trás pra frente,  o 3 indica o index minimo pra começar a busca se foi -1 o I é pq não tem nada 
console.log(uma.match(/[a-z]/g));                    // expressões regulares ps, a flag g faz com que altere todos.
console.log(uma.search(/i/));                        // retorna a primeira letra minúscula da str, funciona pelo parâmetro dentro do '[]' 
console.log(uma.replace(/um/, 'outro'));             // substitui o que tá andes da ',' pra o que tá depois    
console.log(uma.replace(/t/g, 'b'));                 // troca uma letra por outra, PS o 'g' que  faz trocar todas. 
console.log(uma.length);                             // pegar o tamanho da 
// console.log(uma(-3));
// console.log(uma(32));                             // esse exemplo é igual o de cima, o negativo retorna de tras pra frente
console.log(uma.length - 3);                         // prova real para encontrar o 32 above 
console.log(uma.substring(uma.length - 5));          // o substr faz  o mesmo do slice
console.log(uma.split(' ', 2));                      // divide a str (como em python), o número indica quantos I vai ter no array 
console.log(uma.toUpperCase());                      // deixa maiúscula as letrar    
console.log(uma.toLowerCase());                      // deixa minusculas
console.log(uma.slice(-15, -10))                     // pra pegar uma parte da string de trás pra frente, e separando por um intervalo




// nome = 'gabriel scarpelini pavia'
// var spaceindex = nome.indexOf(' ', 1)
// var lastName = nome(spaceindex)
// var firstName = nome(0,spaceindex)
// console.log(lastName)
// console.log(firstName)