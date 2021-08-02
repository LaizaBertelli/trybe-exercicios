//array utilizado para os exercicios 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1

for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//exercicio 2
let sum = 0;
for(var i = 0; i <numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

//exercicio 3
let arithmeticAverage = sum / numbers.length;
console.log(arithmeticAverage);

//exercicio 4
if(arithmeticAverage > 20){
    console.log("valor maior que 20");
}else{
    console.log("Valor menor ou igual a 20");
}

//exercicio 5
let larger = 0;
for(var i = 0; i < numbers.length; i++){
    if(numbers[i] > larger){
        larger = numbers[i];
    }
}

console.log(larger);

//exercicio 6
let odds = 0;
for(var i = 0; i < numbers.length; i++){
    if(numbers[i]%2 !== 0){
        odds++;
    }
}
if(odds === 0){
    console.log("Nenhum valor ímpar encontrado");
}else{
    console.log(odds);
}

//exercicio 7
let smaller = 100;

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] < smaller){
        smaller = numbers[i];
    }
}
console.log(smaller);