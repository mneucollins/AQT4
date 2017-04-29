import { AQT4Page } from './app.po';

describe('aqt4 App', () => {
  let page: AQT4Page;

  beforeEach(() => {
    page = new AQT4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
