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
