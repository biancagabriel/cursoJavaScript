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
pergunta se apenas um dos valores do array equivale a condição
*/

const existeAlimento = pedidos.some ((element, index) => {
    return element.alimento === "pizza";
});

console.log(existeAlimento);