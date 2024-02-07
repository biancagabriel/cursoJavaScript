//propriedades / atributos / funcionalidades 

let tenis = {
    tipo: "tenis de corrida",
    cadarco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 39,
        caixa: {
            largura: 35,
            altura:40,
            profundidade:10,
        },
    },
    marcaArrayValores: ["Nike","Adidas","Vans"],
    marcaArrayObj: [
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },
        {
            nome: "Vans",
        },
    ],
    
    getMarcaArrayValor: function(){
        return this.marcaArrayValores[param].nome;
    },

    getMarcaArrayObj: function(){
        return this.marcaArrayObj[param].nome;
    },
};

console.log(tenis);
console.log(tenis.tipo);
console.log(tenis.tamanho);
