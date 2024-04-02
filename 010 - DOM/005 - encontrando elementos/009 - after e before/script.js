"use strict";

const container = document.querySelector(".container");
const newP = document.createElement('p');

newP.innerText= "ola bianca"; //criando elemento

container.before("ola bianca");
container.after("ola bianca");
