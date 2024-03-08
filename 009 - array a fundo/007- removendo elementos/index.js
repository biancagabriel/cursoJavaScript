/*
shift = remove o primeiro elemento e retorna
pop = remove o último e retorna
*/

let arr = [1,2,3,4,5];

console.table(arr);
arr.shift();

console.log("shift: ",arr.shift());
console.log("pop:",arr.pop());

console.table(arr);
console.log(arr.pop());