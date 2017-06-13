import { TestAQTPage } from './app.po';

describe('test-aqt App', () => {
  let page: TestAQTPage;

  beforeEach(() => {
    page = new TestAQTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
