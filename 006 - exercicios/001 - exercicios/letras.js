//mostrar quantas letras repetidas aparecem na palavra 

const palavra = "BiancA".toLowerCase().replaceAll(" ",""); //deixa toda a palavra em letra minuscula e sem espaço
let letras = {}
console.log(palavra.length)

for( let i=0; i<palavra.length; i++){
    if(letras[palavra[i]]){
        letras[palavra[i]]++
    }else{
        letras[palavra[i]] =1;
    }
    
}

console.log(letras);