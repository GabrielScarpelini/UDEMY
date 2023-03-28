function random(min,max){
    const r = Math.random() * (max-min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 50;
let rand = 11
console.log(rand !==10);


while (rand !== 10) {
    rand = random(min, max);
    console.log(rand)
}
console.log('##########')

do{
    //rand = random(min, max);
    console.log(rand);
} while(rand !== 10);

// nesse daqui ele checa a condição só dps de trabalhar nela























/*const nome = 'Gabriel'
let cont = 0

while (cont < nome.length) {
    console.log(nome[cont])
    cont++; 
}

console.log('Segue a Vida')*/