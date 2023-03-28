function calculadora(){
    return{
       display: document.querySelector('.display'),
       btnClear: document.querySelector('.btn-clear'),
       
       get inicia(){
           //alert('calculadora iniciada')
           this.cliqueBotoes()
           this.clearDisplay()
           this.pressionaEnter()
       },
       
        clearDisplay(){
            this.display.value = ''
       },
        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
       },

        result(){
            var conta = this.display.value  
            try{
                conta = eval(conta) //essa função abre portas para sabotares em seu código
                                    //pois ela pega uma string e roda como se fosse JS
                if(!conta){
                    alert('conta inválida')
                    this.display.value = ''
                }
                this.display.value = String(conta)
            }catch(e){
                alert('Conta inválida')
                this.display.value = ''
                return
            }
       },

        cliqueBotoes(){
            document.addEventListener('click', function(e) {
            const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText) 
                    this.display.focus() //essa função faz com que foque no display dps de apeertar um number
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                
                }if(el.classList.contains('btn-del')){
                    this.deleteOne()
                }
                if(el.classList.contains('btn-eq')){
                    this.result()
                }
            }.bind(this)) // caso seja feito com arrow não precisa disso no final da função
        },
        btnParaDisplay(valor){
            this.display.value += valor
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e =>{
                if (e.keyCode === 13) this.result()
                if (e.keyCode === 46) this.clearDisplay()
            })
        }
    }
}

// const calculator = calculadora()
// calculator.inicia

/*innerText pega o que está entre os button>aqui</button no html
As arrow functions sempre deixarão o this travado em quem criou o
elemento, caso for precisar pegar o document faça com function
ex abaixo de arrow*/


//exercício da aula 56

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
        document.addEventListener('click', (event) => {
        const element = event.target;
            if(element.classList.contains('btn-num')) {
                btnParaDisplay(element.innerText)
                display.focus()   //essa função faz com que foque no display dps de apeertar um number
            }if(element.classList.contains('btn-clear')) clearDisplay()
            if(element.classList.contains('btn-del')) deleteOne()
            if(element.classList.contains('btn-eq')) result()
        })
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