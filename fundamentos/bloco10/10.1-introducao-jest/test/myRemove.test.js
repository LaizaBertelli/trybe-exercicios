const { expect } = require('@jest/globals');
const myRemove = require('../myRemove');

describe('Test function myRemove', () => {
  it('myRemove([1, 2, 3, 4], 3) must return [1, 2, 4]', () => {
    const expected = [1, 2, 4];
    const recieved = myRemove([1, 2, 3, 4], 3);
    expected.forEach((expectedItem) => {
      expect(recieved).toContain(expectedItem);
    });
  });
  it('myRemove([1, 2, 3, 4], 3) should not return [1, 2, 3, 4]', () => {
    const recieved = myRemove([1, 2, 3, 4], 3);
     expect(recieved).not.toContain(3);
  });
  it('myRemove([1, 2, 3, 4], 5) must return [1, 2, 3, 4]', () => {
    const expected = [1, 2, 3, 4];
    const recieved = myRemove([1, 2, 3, 4], 5);
    expected.forEach((expectedItem) => {
      expect(recieved).toContain(expectedItem);
    });
  });
});