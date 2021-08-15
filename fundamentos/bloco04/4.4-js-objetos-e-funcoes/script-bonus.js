//exercício bônus 2
function arrayOfNumbers(vector){
  let pares = [];
  for(let i = 0; i < vector.length; i ++){
    if(vector[i] % 2 === 0 ) {
      pares.push(vector[i]);
    }
  }
  return pares;
}
let test = [[1, 2], [3,4,5,6], [7,8,9,10]];
for(let i = 0; i < test.length; i ++) {
  // console.log(arrayOfNumbers(test[i]));
}

//exercicio bônus 3
const basketTest = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function verify(fruit, basket){
  let count = 0;
  let backup;
  for(let i = 0; i < basket.length; i ++){
    if(fruit === basket[i]){
      count ++;
    }
  }
  backup = count;
  count = 0;
  return backup;
}

function repeatedFruits(basket){
  let count = 0;
  let obj = new Object();
  for(let i = 0; i < basket.length; i ++){
    count = verify(basket[i], basket);
    let fruit = basket[i];
   obj[fruit] = count;
  }
  return obj;
}

console.log(repeatedFruits(basketTest));