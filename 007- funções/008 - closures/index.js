/*
ocorre quando uma função é declarada dentro do corpo de outra e a função interior referencia variaveis locais da
função exterior
*/

/*function QualSeuNome(name){
    const msg = `O seu nome é: ${name}`;
    function YourName(){
        return `${msg} ${name}`;
    }
    return YourName();
}

console.log(QualSeuNome("bianca"));*/

function Calculadora(num1, num2){
    const msg = "resultado:";
    const soma = () => {
        return `${msg} ${num1 + num2}`;
    }
    const subtracao = () => {
        return `${msg} ${num1 - num2}`;
    }
    const multiplicacao = () => {
        return `${msg} ${num1 * num2}`;
    }
    const divisao = () => {
        return `${msg} ${num1 / num2}`;
    }

    return {
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao : multiplicacao(),
        divisao : divisao(),
    };
}

console.log(Calculadora(10,5));