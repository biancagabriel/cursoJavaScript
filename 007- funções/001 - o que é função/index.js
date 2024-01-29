//é um conjunto de instruções que executa uma tarefa.

//1-functions declaration

function isValid(){
const soma = 1+2;
    if(soma ===3){
        return true;
    }
return false;
}

//console.log(isValid());
//2- functions expression

const isValidExpression = function(){
return false;
};

//console.log(isValidExpression());

//3- arrow funtions

const isValidArrow = () => 2*2
console.log(isValidArrow());