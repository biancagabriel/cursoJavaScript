//const stringArray = ["A", "C", "D","W","L","B"];

//console.log(stringArray.sort());
//console.log(stringArray.reverse());

const numberArray = [18,20,30,40,50,1000,1,55,15];

console.log(numberArray.sort((a,b) => a - b)); //fazendo comparação dos números
console.log(numberArray.sort((a,b) => a - b).reverse());

//ordenando array de string: console.log(objArray.sort(a,b)=> a.nome.localeCompare(b.nome)));