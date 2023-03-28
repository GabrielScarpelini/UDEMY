/* funções recursivas, podem ser contadores 
    automáticos, não é ideal para ID
    lembra bastante um WHILE
    
    Dependendo da recursividade, se for muito 
    repetitiva, o navegador barre por chegar num
    limite de vezes (RangeError: Maximum call stack size exceeded)
    
    ela é uma função que executa o código dela 
    e se chama de volta
*/

function recursiva(max){
    if(max > 11290) return   //assim que o max chegar a 10 ela para, por isso o return aqui
    console.log(max)      // para mostrar o 0 sempre usar "maior que"  
    max++
    recursiva(max)
}

recursiva(0)

while (rand < 10000000){  //o while é bem mais aplo 

}