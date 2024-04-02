"use strict";

/*
text content: retorna texto com formatação mas sem elementos html
inner text: retorna só o texto, sem formtação e html
*/

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

p.textContent = "Bianca";
p.innerText= "<strong>Bianca</strong>";