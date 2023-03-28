const inputTarefa = document.querySelector('.input_tarefa');
const botaoTarefa = document.querySelector('.btn_tarefa');
const listaTarefa = document.querySelector('.tarefas');

function criaLi() {      // função usada para criar a lista no html
    const li = document.createElement('li');
    return li;
}
function criaTarefa(textoInput) {  // aqui pega o valor do textoInput e o coloca na lista 
    const li = criaLi();           // chamando a cria item li pra criar outra lista 
    li.innerText = textoInput;     // colocando o valor do texto dentro do item li na tela      
    listaTarefa.appendChild(li);   // jogando item li dentro do listaTarefa
    limpaInput();                  // criada essa função pra "zerar" o valor da textInput
    criaBotaoApagar(li)            // aqui começa a criação do botão para tirar a tarefa
    salvarTarefas();
}
 
function limpaInput() {            // função que zera o textInput
    inputTarefa.value = '';        // atribuindo valor nulo      
    inputTarefa.focus();           // deixando o campo pronto para outra entrada sem precisar clicar 
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');  // criou o botão para apagar a task da lista
    botaoApagar.innerText = 'Apagar';                      // nome no botão
    botaoApagar.setAttribute('class','apagar')             // atribuiu uma classe e o nome da classe
    botaoApagar.setAttribute('title','tá fudido meu pacero') // atribuiu o nome do botão quando o mouse passa por cima
    li.appendChild(botaoApagar)                            // e aqui está jogando esse botão para cad item li 
}
function salvarTarefas() {
    const liTarefas = listaTarefa.querySelectorAll('li'); // está pegando todos os itens li do documento 
    const listaDeTarefas = [];

    for(let listaTarefa of liTarefas) {          
        let tarefaTexto = listaTarefa.innerText;          // atribuindo o valor do listaTarefa ao tarefa texto
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); 
        listaDeTarefas.push(tarefaTexto)                  // jogando o texto pego no coment acima e jogando na listadetarefas 
        console.log(listaDeTarefas);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);   // cria um JSON pra salvar apenas as strings da lista 
    localStorage.setItem('listaTarefas', tarefasJSON);    // aqui salvou a no browser (F12 > aplicativo > armazenamento local )
}                                                         // 1 arg e o nome do atribuído e o segundo o nome do arquivo que será salvo no browser 


function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('listaTarefas')  // get item retornando o valor salvo na memória do browser, pego pelo nome entre aspas  
    const listaDeTarefas = JSON.parse(tarefas)            // tranforma de uma string para uma lista novamente

    for (let tarefa of listaDeTarefas) {                  // esse for cria as tarefas novamente sempre que a pg for atualizada 
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas()                                   // tem que invocar a função para funcionar 


inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {           // valida o valor do ENTER
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value); // faz com que o enter envie entrado nessa função 
    }
});
botaoTarefa.addEventListener('click', function (){
    if(!inputTarefa.value) return;  // pega se está vazio o campo textoInput
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target

    if (el.classList.contains('apagar')) {         // pegando a ação do click na pg pra apagar a tarefa 
        el.parentElement.remove();                 // eliminando ela pelo item li que é o 'pai' dese conteúdo 
        salvarTarefas();                           // está atualizando a lista de tarefas salvas. 
    }
});
