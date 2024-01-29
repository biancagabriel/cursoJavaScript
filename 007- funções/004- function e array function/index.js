/*
1- nome de função
2- retorno
3- não tem hoisting 
4- arguments
5- não pode ser invocado com new
6- contexto 
7- constructor

*/

/*function nomefuncao(){
    return "bianca";
}
console.log(nomefuncao());

const nomeFuncArrow = () => {
    return "bianca g" 
}
console.log(nomeFuncArrow());

const nomeFuncArrowReturn = () => "bianca gabriel ";
console.log(nomeFuncArrowReturn());

const nomeFuncArrowHoisting = () => {
    return "bianca";
}; // só funciona com function */

const  lanches = {
    cardapio: [
        {nome: "xsalada" , preco : "R$30"},
        {nome: "xbacon" , preco : "R$30"},
    ],

    meupedidoFunc: function(select){
        return console.log(this.cardapio[select]);
    },

    meupedidoFuncTimeOut: function ()  {
        setTimeout(
            function(){
                console.log(this.cardapio);
                console.log(this);
            }.bind(this),
            1000
        );
    },


    meupedidoArrowFunc: (select) => {
        this.cardapio = [
            {nome: "xsalada" , preco : "R$30"},
            {nome: "xbacon" , preco : "R$30"},
        ];
        return console.log (this.cardapio[select]);
    },

};
lanches.meupedidoFunc(1);
lanches.meupedidoArrowFunc(1);
lanches.meupedidoFuncTimeOut();