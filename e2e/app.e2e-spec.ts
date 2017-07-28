import { DownsmanV3Page } from './app.po';

describe('downsman-v3 App', () => {
  let page: DownsmanV3Page;

  beforeEach(() => {
    page = new DownsmanV3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
