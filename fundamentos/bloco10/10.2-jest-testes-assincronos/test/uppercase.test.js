const uppercase = require('../uppercase');

describe('Verify callback of uppercase function', () => {
  it('uppercase("something") must return SOMETHING', (done) => {
    uppercase('something', (string) => {
      try {
        expect(string).toBe('SOMETHING');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});