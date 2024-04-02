"use strict";

const container = document.querySelector(".container");

console.log(container.children); //html collection
console.log(container.childNodes); //nodelist pode usar com foreach e vem com espaçamento

const children = Array.from(container.children);
console.log(children);

children.forEach((res) =>{
    console.log(res);
})