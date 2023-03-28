const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);      // atribuiu uma var para pegar a cor do body do doc
const backgroundColorBody = stylesBody.backgroundColor;  // atribuiu a var acima para a cor ficar em outra var

for(let i of ps){
    i.style.backgroundColor = backgroundColorBody
    i.style.color = "#FFFFFF"
}
