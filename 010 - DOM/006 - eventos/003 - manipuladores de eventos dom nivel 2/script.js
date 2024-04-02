"use strict";
//console.log(event.clientX,event.clientY) coordenadas de click


const btn = document.querySelector("button");

btn.addEventListener('click',(event) => {
   document.querySelector('body').style.background = "red";
})

btn.addEventListener("mouseover",(event) => {
    document.querySelector("body").style.background= "#FFF";
} )

btn.addEventListener("mouseleave",(event) => {
    document.querySelector("body").style.background= "#FFF";
} )