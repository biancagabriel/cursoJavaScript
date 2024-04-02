"use strict";

const btn = document.querySelector("button");

//só escuta o último evento 
btn.onclick = function alertOne(){
    alert(123);
};

btn.onclick = function alertTwo(){
    alert(456);
};