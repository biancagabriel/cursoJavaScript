// IIFE: expressão de função invocada imediatamente, da pra usar com arrow function tambem 
// var só funciona dentro do contexto

(function(num1,num2){
    const calc = num1+num2;
    console.log(calc);
})(1,2);

/*function consol(con) {
    return console.log(con);
}

consol("bianca");*/