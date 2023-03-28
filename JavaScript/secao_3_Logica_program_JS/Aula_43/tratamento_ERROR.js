// try{
     // executado quando não há erros
// }catch (e) {
//     // é executada quando há erros 
// }finally {
     // sempre é executada 
// }

 // como fazer o try catch aninhado 


function retornaHora(data){
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando Instância de Date.');
    }
    if(!data) {
        data = new Date();
    } 
    return data.toLocaleTimeString('pt-BR', {//é para retornar a a hora de um local
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const data = new Date('01-01-1970 00:00:00')
    const date = "alfabeto"
    const hora = retornaHora(date);
    console.log(hora);
} catch(erro){
    console.log("Não foi fornecido uma data para a função") // trate o erro, é a melhor forma 
} finally {
    console.log('Tenha um bom dia.')

}

