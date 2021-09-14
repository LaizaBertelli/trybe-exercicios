const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const aArrays = names.map((name) => {
    const splited =  name.split('');
    return splited.filter((char) => char === 'a' || char === 'A');
  });
  return aArrays.reduce((acc, curr) => acc.concat(curr)).length;
}

assert.deepStrictEqual(containsA(), 20);
