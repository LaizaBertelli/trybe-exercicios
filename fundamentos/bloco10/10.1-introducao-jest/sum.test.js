const { expect } = require('@jest/globals');
const sum = require('./sum');

describe('Tests function sum', () => {
  it('Sum of 4 and 5 must be 9', () =>{
    expect(sum(4, 5)).toBe(9);
  });
  it('Sum of 0 and 0 must be 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Sum should not accept string', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  it('Test if error message is: parameters must be numbers', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
  });
});