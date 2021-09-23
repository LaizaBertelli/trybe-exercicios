const getRepos = require('../getRepos');

describe('Tests if expected repos are found', () => {
  it('Tests if getRepos finds repo01', () => {
    const repo01 = 'sd-01-week4-5-project-todo-list';
    const repo02 = 'sd-01-week4-5-project-meme-generator';
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then(result => {
      expect(result).toContain(repo01);
      expect(result).toContain(repo02);
    });
  });
});
