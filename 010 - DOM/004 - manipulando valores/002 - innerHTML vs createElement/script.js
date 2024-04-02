"use strict";

/*
innerHTML: retorna o texto com formatação e os elementos html
createElement: cria um elemento html, processamento é melhor 
*/


const div = document.querySelector("div");
/*console.log(1,div);

div.innerHTML += "<strong>alterar essa parte</strong>"*/

const elementUl = document.createElement("ul");
[1,2,3].forEach((element) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);
console.log(elementUl);


