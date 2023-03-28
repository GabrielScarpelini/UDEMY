// const div = document.querySelector('.container')

function Oinleft(numb){
    return numb >= 10 ? numb : `0${numb}`
}

function getNow(data){
    const semana =['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    const diaSemana = semana[data.getDay()]
    const dia = data.getDate();
    const mes = meses[data.getMonth()]
    const ano = data.getFullYear();
    const hora = Oinleft(data.getHours());
    const min = Oinleft(data.getMinutes());
    return `${diaSemana}, ${dia} de ${mes} de ${ano}<br>${hora}:${min}`
}
const data = new Date()
const dataShow = getNow(data)
console.log(dataShow)


// div.innerHTML += `<p><strong>${data.toString}</strong></p>`




// const div = document.getElementById('');
// const data = new  ();
// div.innerHTML = data.toLocaleString('pt-BR', { Style: 'full', TimeStyle: 'short'});
