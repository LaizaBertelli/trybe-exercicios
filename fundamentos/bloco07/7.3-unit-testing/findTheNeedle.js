const assert = require('assert');
// escreva a função findTheNeedle aqui
function findTheNeedle(wordsArr, word){
  let wordPosition = -1;
  for (let i =0; i < wordsArr.length; i += 1) {
    if(word === wordsArr[i]) {
      wordPosition = i;
    }
  }
  return wordPosition;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);