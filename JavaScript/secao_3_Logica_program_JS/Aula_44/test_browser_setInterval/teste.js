function getTime(){
    time = new Date()
    return time.toLocaleTimeString('pt-BR',{
        hour12: false
    })
}
var diva = document.createElement('div')
let container = document.querySelector('.container')

var confirma = window.confirm('o timer vai crashar em 10secs')

if (confirma){
    var number = 1
    const timer = setInterval(function(){
        //window.alert(`${number++}`)
        var createTag = document.createElement('p')
            createTag.innerHTML = number++
            diva.appendChild(createTag)
            container.appendChild(diva)
    },1000)
    const crash = setTimeout(() =>{
        clearInterval(timer)
        var createTag = document.createElement('p')
        createTag.innerText = 'obrigado por pressionar ok, o sistema agradece'
        diva.appendChild(createTag)
        container.appendChild(diva)
    }, 10000)
    
}else{
    window.alert("você cancelou, agora vai ficar mostrando o tempo a cada um sec")
    const timer = setInterval(() =>{
        var createTag = document.createElement('p')
        createTag.innerHTML = getTime()
        diva.appendChild(createTag)
        container.appendChild(diva)
    },1000)
    const crash = setTimeout(() =>{
        window.alert('Pane no sistema alguém me quebrou')
        clearInterval(timer)
    }, 10000)
}


