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
  console.log(arrayOfNumbers(test[i]));
}