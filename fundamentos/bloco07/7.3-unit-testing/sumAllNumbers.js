const assert = require('assert');
// escreva a função sumAllNumbers aqui
function sumAllNumbers(numbers){
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);