const pedidos = [
    {
        id: 420,
        nome: "bianca",
        alimento: "xbacon",
        bebida: "coca",
    },
    {
        id: 152,
        nome: "leia",
        alimento: "xbacon",
        bebida: "refrigerante",
    },
    {id: 29, nome: "marcio", alimento: "coxinha", bebida: "suco de uva"},
    {
        id: 33,
        nome: "madi",
        alimento: "xpicanha",
        bebida: "coca",
    },
    {id: 55, nome: "jose", alimento: "pizza", bebida: "refrigerante"},
];

/*
o método map além de iterar todo o array ele é bom para editar o iterado
 */

pedidos.map((element, index) => {
    if(element.id === 29){
        return(element.alimento = "kibe");
    }
});

console.log(pedidos);