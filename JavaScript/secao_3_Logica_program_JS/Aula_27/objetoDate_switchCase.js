// const tresHoras = 60*60*3*1000;              // mês em JS começa do 0 = janeiro por exemplo  
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia)  Date é uma função construtora, usa o new e começa com letra maiusculas
//                                               Date(0) seria a hora 0 01/01/1970 época unix

/*                    year  M   D   H   m   S  mil sec   year, month, hour, minute, second, milésimos de segundo separados por virgulla */
//const data = new Date(2022, 3, 20, 17, 14, 27, 1000);
//const date = new Date(2022, 3, 20, 17); // se omite algum valor, ele zera, na hora COM NUMBERS

function changeDay(dia){
    var DiaSemana;
    if (dia = 0){
        DiaSemana = 'Domingo'
    }else if(dia = 1){
        DiaSemana = 'Segunda'
    }else if(dia = 2){
        DiaSemana = 'Terça'
    }else if(dia = 3){
        DiaSemana = 'Quarta'
    }else if(dia = 4){
        DiaSemana = 'Quinta'
    }else if(dia = 6){
        DiaSemana = 'Sexta'
    }else if(dia = 7){
        DiaSemana = 'Sábado'
    }
    return DiaSemana        
}
function formatDate(date){
    dia = date.getDate()
    mes = date.getMonth() + 1
    ano = date.getFullYear()
    minuto = date.getMinutes()
    weekDay = date.getDay()
    var weekDayText;
    switch(weekDay){
        case 0:
            weekDayText = 'Domingo'
            break
        case 1:
            weekDayText = 'Segunda'
            break
        case 2:
            weekDayText = 'Terça'
            break
        case 3:
            weekDayText = 'Quarta'
            break
        case 4:
            weekDayText = 'Quinta'
            break
        case 5:
            weekDayText = 'Sexta'
            break
        case 6:
            weekDayText = 'Sábado'
            break
    }

    if(minuto <=9){
        minuto = "0" + minuto
    }
    console.log(`hoje é ${weekDayText} ${dia}/${mes}/${ano} as ${date.getHours()}:${minuto}`)
}

const data = new Date() // utilizando STRINGS pra 
formatDate(data)
const result = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`
console.log(result);
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', changeDay(data.getDay()));   // o número do dia da semana sendo sunday 0
console.log(data.toString()); // retorna o valor no padrão americano 
console.log(Date.now());

