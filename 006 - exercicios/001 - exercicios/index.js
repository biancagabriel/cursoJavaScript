/*
calculadora de imc

IMC = peso / altura *2

resultado calculo | saida para usuário
abaixo de 17         muito abaixo do peso
entre 17 e 18.49     abaixo do peso
entre 18.50 e 24.99  peso noormal
entre 25 e 29.99     acima do peso
entre 30 e 34.99     obesidade 1
entre 35 e 39.99     obesidade 2
*/

const peso = 107;
const altura = 1.67;
const imc = Number((peso / (altura * altura)).toFixed(2)); //retornando 2 casas decimais

console.log(imc);

switch(true){
    case imc < 17:
    console.log ("muito abaixo do peso");
    break;
    case imc >= 17 && imc <=18.49:
        console.log("abaixo do peso");
    break;
    case imc >=18.50 && imc <=24.99:
        console.log("peso normal");
    break;
    case imc >=25 && imc<=29.99:
        console.log("acima do peso");
    break;
    case imc >=30 && imc <=34.99:
        console.log("obesidade 1");
    break;
    case imc >= 35 && imc <=39.99:
        console.log("obesidade 2");
        break;
        default:
        break;
}