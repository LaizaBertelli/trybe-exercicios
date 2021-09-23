const { expect } = require('@jest/globals');
const myFizzBuzz = require('../myFizzBuzz');

describe('Test function myFizzBuzz', () => {
  it('myFizzBuzz(15) must return fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  it('myFizzBuzz(6) must return fizz', () => {
    expect(myFizzBuzz(6)).toMatch('fizz');
  });

  it('myFizzBuzz(10) must return buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });

  it('myFizzBuzz(4) must return 4', () => {
    expect(myFizzBuzz(4)).toBe(4);;
  });

  it('myFizzBuzz("something") must return false', () => {
    expect(myFizzBuzz('something')).toBeFalsy();
  });
});
