import { IdeationPage } from './app.po';

describe('ideation App', () => {
  let page: IdeationPage;

  beforeEach(() => {
    page = new IdeationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
