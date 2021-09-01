const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(words){
  let wordCount = [];
  for (let i = 0; i < words.length; i ++) {
    let aux  = words[i];
    let count = 0;
    for(let j = 0; j < aux.length; j ++ ) {
      count++;
    }
    wordCount.push(count);
  }
  return wordCount;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);