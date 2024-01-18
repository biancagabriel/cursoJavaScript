/*
var // usado globalmente e causa bug
let // usado dentro de um escopo
const  //gerado dentro de escopo e armazena dados apenas 1 vez
nomes reservados
 */

var cachorro = "leia";
console.log(cachorro);

cachorro = "kyara"
console.log(cachorro);

let lanche = "hamburguer";
console.log(lanche);

const nome = "bianca";
console.log(nome);
