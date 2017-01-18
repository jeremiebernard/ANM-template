import { ANMTemplatePage } from './app.po';

describe('anm-template App', function() {
  let page: ANMTemplatePage;

  beforeEach(() => {
    page = new ANMTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
