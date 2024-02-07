const Tenis = {
    tamanho: 45,
    estoque: true,
    marcas: [
        {nome: "Nike"}, { nome: "adidas"}
    ],
    secret: 123456,
    n: 5,
    link: { a: "a", b: {c: "C"}},
};

//const {tamanho,estoque,marcas} = Tenis;
//console.log(tamanho,estoque,marcas);

//const {secret: randomNumber} = Tenis;
//console.log(secret);
//console.log(randomNumber);

const {link: {
    b: {c},
},
} = Tenis;
console.log(c);
