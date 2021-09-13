const assert = require('assert');

// escreva greet abaixo
function greet(name, salut = 'Hi') {
  return `${salut} ${name}`;
}

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');