import { ChoobaAppPage } from './app.po';

describe('chooba-app App', () => {
  let page: ChoobaAppPage;

  beforeEach(() => {
    page = new ChoobaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
