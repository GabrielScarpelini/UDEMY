/**
 * quando tiver uma variavel de controle e continue, sempre o controle
 * vai vir antes da palavra continue;
 * 
 */




const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i in numeros) {
    let numero = numeros[i] 
    
    if (numero === 2 || numero === 5){
        console.log('pulei o numero 2 e 5 ')
        continue; // quando encontra a palavra continue ele vai para o proximo indice da lista 
    }   // sempre coloque continue antes do comando final ser executado
    
    console.log(numero)
    if (numero === 7){
        console.log('7 encontrado, saindo 1 2 3')
        break
    }
}