import { RepoSearcherPage } from './app.po';

describe('repo-searcher App', function() {
  let page: RepoSearcherPage;

  beforeEach(() => {
    page = new RepoSearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rs works!');
  });
});
