const assert = require('assert');
const greetPeople = (people) => {
  let greeting = 'Hello ';
  let phrase = [];

  for (const person in people) {
    phrase[person] = greeting + people[person];
  }
  return phrase;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.deepStrictEqual(greetPeople(parameter), result, 'Error: expected result');