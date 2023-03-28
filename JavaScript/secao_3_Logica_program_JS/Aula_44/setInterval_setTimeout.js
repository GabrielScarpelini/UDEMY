function retornaHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {   
        hour12: false
    });
}

function andaHora() {
    const data = new Date ()
    //const timer = setInterval(function(){}, 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',                  
        hour12: false
    });
};

var opaio = () =>{
    console.log(andaHora())
} 
/*
funciona assim, uma função que retorna a hora e o setInterval vai
executrar essa função com o tempo específico, sendo assim, se for
a função for só retornar a hora, vai repetir a cada segundo */


const timer = //setInterval(function () {        // usando uma função criada na hora (anônima)
        //     console.log(andaHora());
        // } , 1000);                            //sempre após a virgula são os miliseconds
        
        setInterval(opaio, 1000)               // usando uma função já criada
        console.log('você terá 10 segundos para tomar uma atitude')
        setTimeout(function(){
        console.log('Voce tá aí ainda, faz 8 segundos que seu código rodou sem você')
        }, 8000)

        setTimeout(function(){
            clearInterval(timer)
            console.log('Kaboooooooom')
        },10000)
