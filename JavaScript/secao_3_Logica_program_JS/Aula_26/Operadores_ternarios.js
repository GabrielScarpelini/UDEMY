//  ? : esse é o OP ternário 
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
                        // aqui ele faz tipo um if, se condição foi verdadeira
                        // ele pega o param depois do '?' e sor falso, pega o 
                        // param depois do ':'
console.log(nivelUsuario);


// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');     como nós faríamos sem o OP
// }else {
//     console.log('Usuário norma');
// }
