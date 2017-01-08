import { TrelloClonePage } from './app.po';

describe('trello-clone App', function() {
  let page: TrelloClonePage;

  beforeEach(() => {
    page = new TrelloClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
