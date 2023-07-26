var arrey = "Rua Geraldo Flausino Gomes, 42, Brooklin, São Paulo - SP - 00000-000"
var unidadeFed = ""

arrey.split("").filter((valor, indice, array) =>{
    if(indice > array.length - 15 && indice < array.length - 11){
        unidadeFed += valor
    }
})
console.log(unidadeFed.trim())
