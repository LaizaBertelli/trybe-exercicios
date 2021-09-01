const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Error: expected to return "fizzbuzz"');
assert.strictEqual(myFizzBuzz(9), 'fizz', 'Error: expected to return "fizz"');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Error: expected to return "buzz"');
assert.strictEqual(myFizzBuzz(2), 2, 'Error: expected to return 2');
assert.strictEqual(myFizzBuzz('2'), false, 'Error: expected to return false');
