/*
slice = pega os dados dentro de um range sem quebrar o array e faz cópia
splice = remove os dados do array dentro do range
*/

let arr = [
    {nome: "Bianca", tel: "(11)99999 9999"},
    {nome: "mãe", tel: "(11)99999 9999"},
    {nome: "Amigo 1", tel: "(11)99999 9999"},
    {nome: "Amigo 2", tel: "(11)99999 9999"},
    {nome: "Amigo 3", tel: "(11)99999 9999"},
];

console.table(arr);

//const newArray = arr.slice(0,3);
//console.table(newArray);

arr.splice(0,3);

console.table(arr);