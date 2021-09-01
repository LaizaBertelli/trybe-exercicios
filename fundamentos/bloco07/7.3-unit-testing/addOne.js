const assert = require('assert');
// escreva a função addOne aqui
function addOne(arr){
  let aux = [];
  for(let i = 0; i < arr.length; i ++) {
    aux[i] = arr[i] + 1;
  }
  return aux;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected, 'line 17');
assert.deepStrictEqual(myArray, unchanged, 'line 18');