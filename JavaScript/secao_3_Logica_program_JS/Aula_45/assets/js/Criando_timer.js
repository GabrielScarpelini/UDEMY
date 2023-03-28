function retornaHora(segundos){
    let data = new Date(segundos * 1000);      // está colocando valor dentro de segundo
    return data.toLocaleTimeString('pt-BR', {  // multiplicado por 1000 pois o JS entende milisec 
        hour12: false,
        timeZone: 'GMT'     //atribuindo o valor do nosso fuso horário
    });
};
console.log(retornaHora(10))

const relogio = document.querySelector(".relogio")
// const iniciar = document.querySelector('.iniciar')
// const pausar = document.querySelector('.pausar')
// const zerar = document.querySelector('.zerar')
let segundos = 0                         // foi criada a função para usar dentro das funções 
let timer;                               // aqui também criada para poder ser usada em outras funções 

function iniciaRelogio(){
    timer = setInterval(function() {    //chamando a função para fazer andar de 1 em 1 sec   
        segundos ++;
        relogio.innerHTML = retornaHora(segundos); // atribuindo o valor ao html, chamando a função para formatar no date 
    }, 1000);   
}

document.addEventListener('click', function(event) {        
    const elemento = event.target;                           // function .target pega os elementos que foram clicados na tela

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado') // aqui ele atribuiu a classe criada no css removendo o vermelho
        clearInterval(timer)   // aqui evita do relógio ser startado mais de uma vez
        iniciaRelogio()
        };
    if (elemento.classList.contains('pausar')) {
        clearInterval(timer)  // essa variável entrou na função inicia e aqui vc pode pará-la por meio deste comando
        relogio.classList.add('pausado') // aqui ele atribuiu a classe criada no css adicionando o vermelho
    
    };
    if (elemento.classList.contains('zerar')) {
        clearInterval(timer) // essa variável entrou na função inicia e aqui vc pode pará-la por meio deste comando
        relogio.innerHTML = "00:00:00"
        segundos = 0
        relogio.classList.remove('pausado')  // aqui ele atribuiu a classe criada no css removendo o vermelho
    };
});
  