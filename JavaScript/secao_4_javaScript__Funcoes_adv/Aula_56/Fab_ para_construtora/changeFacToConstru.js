/*como só o "inicia" vai pra fora da função 
só ele tem o this, os outros métodos e atributos
por ficarem dentro da função apenas, podem ser criados 
com const ou let ou var*/

function Calculadora(){
    let display = document.querySelector('.display')
    let btnClear = document.querySelector('.btn-clear')

    this.inicia = () => {
        cliqueBotoes()
        clearDisplay()
        pressionaEnterNDel()
    }

    const clearDisplay = () =>{display.value = ''}
    
    const deleteOne = () =>{display.value = display.value.slice(0, -1)}
    
    const btnParaDisplay = valor =>{display.value += valor}

    const result = () => {
        var conta = display.value  
        try{
            conta = eval(conta) //essa função abre portas para sabotares em seu código
                                //pois ela pega uma string e roda como se fosse JS
            if(!conta){
                alert('conta inválida')
                display.value = ''
            }
            display.value = String(conta)
        }catch(e){
            alert('Conta inválida')
            display.value = ''
            return
        }
   }

    const cliqueBotoes = () =>{
        document.addEventListener('click', event => {
        const element = event.target;
            if(element.classList.contains('btn-num')) {
                btnParaDisplay(element.innerText)
                display.focus() //essa função faz com que foque no display dps de apeertar um number
            }if(element.classList.contains('btn-clear')) clearDisplay()
            if(element.classList.contains('btn-del')) deleteOne()
            if(element.classList.contains('btn-eq')) result()
        }) // caso seja feito com arrow não precisa disso no final da função
    }

    const pressionaEnterNDel = () =>{
        display.addEventListener('keyup', event =>{
            if (event.keyCode === 13) result()
            if (event.keyCode === 46) clearDisplay()
        })
    }
}

const calculator = new Calculadora()
calculator.inicia()

