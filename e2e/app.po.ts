export class Ng2WixappBoilerplatePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-wixapp-boilerplate-app h1')).getText();
  }
}
