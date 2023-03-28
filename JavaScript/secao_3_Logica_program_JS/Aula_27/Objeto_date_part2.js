function zero_a_left(num) {
    return num >= 10 ?  num : `0${num}`; 
}

function formataData(data) {
    const dia = zero_a_left(data.getDate());
    const mes = zero_a_left(data.getMonth() + 1);
    const ano = zero_a_left(data.getFullYear());
    const hora = zero_a_left(data.getHours());
    const min = zero_a_left(data.getMinutes());
    const seg = zero_a_left(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil)

