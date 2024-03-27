"use strict";

//só funciona nas tags do html e não funciona com for each

const p = document.getElementsByTagName("p");

console.log(p);

for(let element of p){
    console.log(element);
}