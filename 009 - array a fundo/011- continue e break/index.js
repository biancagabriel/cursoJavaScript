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
    {
        nome:"jose",
        sobrenome: "gabriel",
    },
    {
        nome:"jose 2",
        sobrenome: "gabriel",
    },
    {
        nome:"jose 3",
        sobrenome: "gabriel",
    },
];

for(let item of myArrayObj){
    if(item.nome === "leia"){
        console.log("a leia ta esperando");
        continue;
    }
    if(item.nome === "jose 2"){
        console.log("lembrar de mandar sms")
        break; // trava o loop
    }

    console.log(item);
}