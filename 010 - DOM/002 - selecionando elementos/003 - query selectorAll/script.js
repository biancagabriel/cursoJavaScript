"use strict"

const p = document.querySelectorAll("p"); // virou um node list 

console.log(p);

p.forEach( (element,index) => {
    element.style.color="#FFF"; //mudou a cor para branco
    element.style.padding = "20px"; //mudou tamanho da letra
    if(index ===0){
        element.style.background = "blue";
    }
    if(index ===1){
        element.style.background = "red";
    }
    console.log(index,element);
});