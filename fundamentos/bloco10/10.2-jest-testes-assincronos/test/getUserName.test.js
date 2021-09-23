const getUserName = require('../getUserName');

describe('Tests function getUserName with promise syntax', () => {
  it('test when getUserName successfully finds an user', () => {
    getUserName(1).then((nameID) => {
      expect(nameID).toEqual('Mark');
    });
  });

  it('test when getUserName fails finding an user', () => {
    getUserName(3).catch((error) => (
      expect(error.message).toMatch(`User with 3 not found.`)
    ));
  });
});

describe('Tests function getUserName with async/await syntax', () => {
  it('succeed', async () => {
    const user = await getUserName(2);
  expect(user).toBe('Paul') ;
  });

  it('fails', async () => {
    expect.assertions(1);
    try {
      await getUserName(4);
    } catch (error) {
      expect(error).toEqual(new Error('User with 4 not found.'));
    }
  });
});