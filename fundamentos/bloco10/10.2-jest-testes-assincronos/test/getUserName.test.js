const getUserName = require('../getUserName');

describe('Tests function getUserName with promise syntax', () => {
  it('test when getUserName successfully finds an user', () => {
    getUserName(1).then((nameID) => {
      expect(nameID).toEqual('Mark');
    });
  });

  it('test when getUserName fails finding a user', () => {
    getUserName(3).catch((error) => (
      expect(error.message).toMatch(`User with 3 not found.`)
    ));
  });
});