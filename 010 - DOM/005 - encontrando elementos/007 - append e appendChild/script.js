"use strict";

const container = document.querySelector(".container");

//container.append("<p>olá bianca</p>"); //adiciona texto

const newDiv= document.createElement("div");
newDiv.innerText= "olá bianca";
container.appendChild(newDiv); //adiciona elementos
