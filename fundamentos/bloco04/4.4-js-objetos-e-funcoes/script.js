//Parte I - Objetos e For/In
//exercicios 1 - 4
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
console.log("Bem-vinda, " + info.personagem);

for(let key in info){
  console.log(key);
}
for(let value in info){
  console.log(info[value]);
}

//exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear mountain, Dell's Four Color Comics#178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for(let key in info, info2){
  console.log(info[key] + " e " + info2[key]); //não pode imprimir o Sim e Sim corrigir depois
  if(info.recorrente === info2.recorrente){
    console.log("Ambos recorrentes");
  }
}

//Parte II - Funções

//exercicio 1
function palindromo(word){
  let invertedWord = "";
  //inverte a string
  invertedWord = word.split('').reverse().join('');
  //compara as strings
  if(word === invertedWord){
    return true;
  }else{
    return false;
  }
}

console.log(palindromo("arara"));

//exercicio 2
function indexLarger (intArray){
  let larger = 0;
  let index;
  for(let i = 0; i < intArray.length; i ++){
    if(intArray[i]> larger){
      larger = intArray[i];
      index = i;
    }
  }
  return index;
}
let arrayLarger = [2, 3, 6, 7, 10, 1];
console.log(indexLarger(arrayLarger));

//exercicio 3
function indexSmaller (intArray){
  let smaller = 100;
  let index = 0;

  for(let i = 0; i < intArray.length; i ++){
    if(intArray[i] < smaller){
      smaller = intArray[i];
      index  = i;
    }
  }
  return index;
}

let arraySmaller = [2, 4, 6, 7, 10, 0, -3];
console.log(indexSmaller(arraySmaller));

//exercicio 4


// //exercicio 5


//exercicio 6
function summation (n){
  let sum = 0;
  for(let i = n; i > 0; i --){
    sum += i;
  }
  return sum;
}
console.log(summation(5));

//exercicio 7
function endingWord( ending, word){

let startPosition = ending.length - word.length;
let aux = "";

for(let i = startPosition; i < ending.length; i++){
 aux += ending[i];
}
if(aux === word){
  return true;
}else{
  return false;
}
}

console.log(endingWord('joaofernando', 'fernan'));