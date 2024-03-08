const pedidos = [
    {
        id: 420,
        nome: "bianca",
        alimento: "xbacon",
        bebida: "suco",
    },
    {
        id: 152,
        nome: "leia",
        alimento: "xbacon",
        bebida: "refrigerante",
    },
    {id: 29, nome: "marcio", alimento: "coxinha", bebida: "suco"},
    {
        id: 33,
        nome: "madi",
        alimento: "xpicanha",
        bebida: "suco",
    },
    {id: 55, nome: "jose", alimento: "pizza", bebida: "refrigerante"},
];

/*
se tem uma condição ela vai tratar todo o array, retorna com false se tem mais itens alem do que ta passando na verificação
*/

const temRefri = pedidos.every((element) => {
    return element.bebida === "refrigerante";
});

console.log(temRefri);