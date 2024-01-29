//adiiciona um obj dentro de uma função

/*function Name(name){
    this.name = name;
    this.sobrenome = () => {
        const nomeCompleto = `${this.name} ${sobrenome}`
        return nomeCompleto;
    }
}

const bianca = new Name("bianca", "gabriel");
const joao = new Name("joao");
console.log(bianca.sobrenome()); */

function Calculadora (num1, num2){
    this.soma = () => {
        return `${num1 + num2}`;
    }

    this.subtracao = () => {
        return `${num1 - num2}`;
    }
}

const calculadora = new Calculadora();
console.log(calculadora.soma(1,2));
console.log(calculadora.subtracao(5,4));
