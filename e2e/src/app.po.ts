import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  //Contains methods to call in tests
  login() : void{
    element(by.id('username')).sendKeys('myusername');
    browser.sleep(1000);
    element(by.id('password')).sendKeys('mypassword');
    browser.sleep(1000);
    element(by.id('loginbutton')).click();
  }
}
