/*function soma (num1,num2){
    if(typeof num1 === "number" && typeof num2 === "number") {
        return num1 +num2;
    }
    return "passado dados diferentes";
}
console.log(soma(soma(1,4), soma(1,4)));*/

function subtracao(){
    return arguments; // não tem como saber os argumentos que estão sendo passados e não funciona no arrow function
}
console.log(subtracao(1,2,"abc"));