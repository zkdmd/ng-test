import { MyTestPage } from './app.po';

describe('my-test App', () => {
  let page: MyTestPage;

  beforeEach(() => {
    page = new MyTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
