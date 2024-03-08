//for ([inicialização]; [condição]; [expressão final])
const myArray = [1,2,3,4,5,6];

const myArrayObj = [
    {
        nome:"bianca",
        sobrenome: "gabriel",
    },
    {
        nome:"leia",
        sobrenome: "maria",
    },
    {
        nome:"madeleine",
        sobrenome: "gabriel",
    }
];

/* for(let i =0;  i<myArrayObj.length; i++){
     console.log(myArrayObj[i]);
 }

//for off

for(let item of myArrayObj){
    console.log(item);
}*/

//for in
const obj = {nome: "bianca", sobrenome: "gabriel"};

for(let item in obj){
    console.log(obj[item]);
}
