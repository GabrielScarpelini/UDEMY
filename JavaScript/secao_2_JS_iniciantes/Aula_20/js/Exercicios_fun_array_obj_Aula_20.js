//  IIFE imidiatly invoked function expression função criada e auto invocada no mesmo tempo
function meuEscopo (){
    const form = document.querySelector('.form');  // no query . seleciona classe e # seleciona ID como no css
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    function recebeEventoForm (evento) {           // previnindo de enviar o form de outra maneira 
        evento.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura')
        
        
        function getPeople(nome, sobrenome, peso, altura ) {
           return{ 
            nome: nome.value,                            // o Value é mais pra quando for usar o valor em algum lugar
            sobrenome: sobrenome.value,                  //no caso será usado pra preencher a div lá 
            peso: peso.value,
            altura: altura.value};
        };
        const pessoa1 = getPeople(nome,sobrenome,peso,altura)
        
        pessoas.push(pessoa1)   
        console.log(pessoas)
    
        resultado.innerHTML += `<p>${pessoa1.nome} ${pessoa1.sobrenome}</P>
                                <p>${pessoa1.peso}</P>
                                <p>${pessoa1.altura}</P>`

    }; 
  
    form.addEventListener('submit', recebeEventoForm)


}

meuEscopo()

 



 // function recebePessoa(nome, sobrenome, peso, altura){
    //     nome = form.querySelector('.nome')
    //     sobrenome = form.querySelector('.sobrenome')
    //     peso = form.querySelector('.peso')
    //     altura = form.querySelector('.altura')}










// form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1)                                criando uma função para impedir o envio do formulário
    //     console.log('Foi Enviado')              maneira antiga 
    // };