const Tenis = {
    tamanho: 45,
    estoque: true, 
    marcas : [{nome: "nike"}, {nome:"adidas"}],
    secret: 123456,
    n: 5,
    link: {a: "a é = a", b: {c: "c é = a c"}},
};

//hasOwnPropertie | propertyName in Tenis

//console.log(Tenis.hasOwnProperty("tamanho"));

/*if(Tenis.hasOwnProperty("tamanho")){
    console.log("existe tamanho");
}else{
    console.log("não existe")
}*/

console.log("tamanho" in Tenis);