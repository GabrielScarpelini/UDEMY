
// try{
//     console.log(nãoExisto)
// } catch(Err) {
//     console.log('naoExisto Não existe')
//     console.log(Err)
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e Y precisam ser números.');
    }
    return x + y
}

try{
    console.log(soma(1, 2))
    console.log(soma("a",2))
} catch(error){
    // console.log(error)
    console.log('Alguma coisa mais amigável')
}