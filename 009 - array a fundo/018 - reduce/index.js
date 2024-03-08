const pedidos = [
    {
        id: 420,
        nome: "bianca",
        alimento: "xbacon",
        bebida: "suco",
        preco: 100,
    },
    {
        id: 152,
        nome: "leia",
        alimento: "xbacon",
        bebida: "refrigerante",
        preco: 59,
    },
    {
        id: 29, 
        nome: "marcio", 
        alimento: "coxinha", 
        bebida: "suco",
        preco: 33,
    },
    {
        id: 33,
        nome: "madi",
        alimento: "xpicanha",
        bebida: "suco",
        preco: 79,
    },
    {
        id: 55, 
        nome: "jose", 
        alimento: "pizza", 
        bebida: "refrigerante",
        preco: 47,
    },
];

/*
a ideia é pegar todos os valores do array e juntar num só
*/

const balancete = pedidos.reduce((total, element) =>{
    return total + element.preco;
},0)

console.log(balancete);