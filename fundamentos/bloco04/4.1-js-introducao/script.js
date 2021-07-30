//implementa funções aritméticas básicas, adição, subtração, multiplicação e divisão + módulo.
function add (a, b){
    console.log(a +b);
};

function sub (a, b){
    console.log( a-b);
}

function multiply (a, b){
    console.log(a*b);
}

function divide (a, b){
    if(b !== 0){
       console.log(a/b);
    } else{
        console.log("Math Error: Impossible to divide by 0");
    }
}

function module (a, b){
    console.log(a%b);
}

add(3, 6);
sub(3, 6);
multiply(3, 6);
divide(3, 6);
module(3, 6);

// exercicio 2 - compara dois números

function biggest(a, b){
    if(a > b){
        return a;
    }else {
        return b;
    }
}

console.log(biggest(3, 6));

//exercicio 3

function biggestOf3(a, b, c){
    if(a >b && a >c){
        return a;
    } else if(b > a && b > c){
        return b;
    } else {
        return c;
    }
}

console.log(biggestOf3(1, 9, 2));

//exercicio 4

function integer(){
    const number = 13;
    if( number >= 0){
        return "positive";
    }else{
        return "negative";
    }
}

console.log(integer());

//exercicio 5

function angles (){
    const internalA = 45;
    const internalB = 60;
    const internalC = 75;

   if((internalA <=0 || internalB <=0) || internalC <= 0 ){
       return "Error: Negative numbers are not valid."
   }else if( internalA + internalB + internalC === 180){
       return true;
   } else{
       return false;
   }
}

console.log(angles());

//exercicio 6
function chessMoves(chessPiece){

    switch(chessPiece){

        case "rainha":
            return "lados e diagonais";
        case "bispo":
            return "diagonais"
        case "peão":
            return "uma casa para frente"
        case "rei":
            return "uma casa para qualquer lado"
        case "cavalo":
            return "movimento de L - 5 casas no total"
        case "torre":
            return "laterais"
        default: return "Erro: peça invalida";
    }
}

console.log(chessMoves("dama"));

//exercicio 7

function score (numberScore){

    if(numberScore >= 90){
        return "A";
    } else if(numberScore >= 80){
        return "B";
    } else if( numberScore >= 70){
        return "C";
    } else if(numberScore >= 60){
        return "D";
    } else if(numberScore >= 50){
        return "E"
    }else {
        return "F";
    }
}

console.log(score(60));

//exercicio 8

function evenNumber(){
    const number1 = 10;
    const number2 = 15;
    const number3 = 3;

    if((number1%2 === 0 || number2%2 === 0) || number3%2 === 0){
        return true;
    } else{
        return false;
    }
}

console.log(evenNumber());

//exercicio 9

function oddNumber(){
    const number1 = 10;
    const number2 = 2;
    const number3 = 4;

    if((number1%2 !== 0 || number2%2 !== 0) || number3%2 !== 0){
        return true;
    } else{
        return false;
    }
}

console.log(oddNumber());