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