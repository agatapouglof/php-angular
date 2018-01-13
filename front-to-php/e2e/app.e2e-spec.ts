import { FrontToPhpPage } from './app.po';

describe('front-to-php App', () => {
  let page: FrontToPhpPage;

  beforeEach(() => {
    page = new FrontToPhpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
