import { browser, element, by } from 'protractor';

export class RepoSearcherPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rs-root h1')).getText();
  }
}
