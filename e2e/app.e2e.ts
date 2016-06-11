import { Ng2WixappBoilerplatePage } from './app.po';

describe('ng2-wixapp-boilerplate App', function() {
  let page: Ng2WixappBoilerplatePage;

  beforeEach(() => {
    page = new Ng2WixappBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-wixapp-boilerplate works!');
  });
});
