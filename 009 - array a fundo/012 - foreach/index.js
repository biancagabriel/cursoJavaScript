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
    },
];

myArrayObj.forEach((item,index) =>{
  if(item.nome === "leia"){
    return console.log("leia ta te esperando");
  }  
    console.log(item)
});