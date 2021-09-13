const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
// function filterPeople(peoples) {
//   let australian = peoples.filter((people) => people.nationality === 'Australian');
//   let century20Australians = australian.filter((people) => people.bornIn >= 1901 && people.bornIn < 2000);
//   return century20Australians; 
// } //is working but its not what they want, try to use object destructuring

function filterPeople(peopleArr) {
  const australians = peopleArr.filter(({nationality} = peopleArr) => nationality === 'Australian');
 return australians.filter(({bornIn} = australians) => bornIn >= 1901 && bornIn < 2000);
}

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });
