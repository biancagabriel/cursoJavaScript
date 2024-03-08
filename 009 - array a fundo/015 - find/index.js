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
ele procura e retorna o primeiro valor encontrado no array
*/

const findId = pedidos.find((element) => {
    return element.id === 29;
});


console.log(findId);