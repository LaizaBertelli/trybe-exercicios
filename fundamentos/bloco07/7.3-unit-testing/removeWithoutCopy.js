const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], 'Error: expected [1, 2, 4]');
assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Error: expected to not return [1, 2, 3, 4]');
const arr = [1, 2, 3, 4];
myRemoveWithoutCopy(arr, 3);
assert.deepEqual(arr, [1, 2, 3, 4], 'Error: expected arr to be [1, 2, 3, 4]');
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Error: expected [1, 2, 3, 4]');