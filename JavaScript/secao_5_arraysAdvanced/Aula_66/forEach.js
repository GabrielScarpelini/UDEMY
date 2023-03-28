/* forEach só funciona em arrays (para cada item do array)
    precisa de uma função de callBack tbme pode ter os mesmo
    params (valor, indice, array)
*/

var lista = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// lista.forEach((valor, indice, array)=>{
//     console.log(array[indice])            // assim voltando o valor de cada um
// })                                        // junção de "for in e for of" 

lista.forEach(valor => console.log(valor))