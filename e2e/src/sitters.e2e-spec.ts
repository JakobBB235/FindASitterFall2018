import { browser, element, by } from "protractor";
import { LoginComponent } from "src/app/home/login/login.component";
import { AppPage } from "./app.po";
import { Sitter } from "src/app/entities/sitter";

//sitters-list
describe('findsitter', () => {
    
    //1: Navigate to findsitter
    //2: Fill out login and click
    //3: Count number of sitters (a)
    //4: Navigate to register without browser.get (no page reload!, temp data will reset)
    //5: Fill out form to register a new sitter
    //6: Navigate to sitters-list without browser.get (no page reload!)
    //7: Count number of sitters (b)
    //8: Expect b-a should be 1 (sitter is created)

    it('1.0: Create a new sitter, after there should be one more', () => {
        browser.get('/portal/findsitter'); //1 redirects to login. because of auth
        
        // browser.sleep(1000);
        //2
        element(by.id('username')).sendKeys('myusername');
        // browser.sleep(1000);
        element(by.id('password')).sendKeys('mypassword');
        // browser.sleep(1000);
        element(by.id('loginbutton')).click();
        // let page = new AppPage; //init app.po.ts to use methods
        // page.login
        // browser.sleep(1000);

        element(by.id('findsitterId')).click();
        //3 Count 1st time
        var sitterCountBefore;
        element.all(by.id('testLoop2')).then(function(elemsAfter){ //css .example-card
            console.log(elemsAfter.length);
            sitterCountBefore = elemsAfter.length
        });

        // browser.sleep(1000);

        element(by.id('homeId')).click();
        // browser.sleep(1000);
        element(by.id('registerId')).click();
        // browser.sleep(1000);
        element(by.id('registerSitterId')).click();
        // $$('#findsitterId').click(); Alternative

        // browser.sleep(1000);
        //5
        element(by.id('usernameId')).sendKeys('username');
        // browser.sleep(500);
        element(by.id('passwordId')).sendKeys('password');
        // browser.sleep(500);
        element(by.id('nameId')).sendKeys('Jakob');
        // browser.sleep(500);
        element(by.id('genderId')).click();
        // browser.sleep(500);
        element(by.id('genderMaleId')).click();
        // browser.sleep(1000);
        // element.all(by.css('[ng-click="select(dt.date)"] > span')).first().click();
        element.all(by.id('birthdateId')).sendKeys('2/19/1994');
        // browser.sleep(500);
        element(by.id('criminalRecordId')).click();
        // browser.sleep(500);
        element(by.id('noCriminalRecordOptionId')).click();
        // browser.sleep(500);
        element(by.id('childRecordId')).click();
        // browser.sleep(500);
        element(by.id('noChildRecordOptionId')).click();
        // browser.sleep(1000);
        element(by.id('hourlywageId')).sendKeys('100');
        // browser.sleep(1000);
        element(by.id('addressId')).sendKeys('some');
        // browser.sleep(1000);
        element(by.id('zipcodeId')).sendKeys('3400');
        // browser.sleep(1000);
        element(by.id('cityId')).sendKeys('Hillerød');
        // browser.sleep(1000);
        element(by.id('registerbutton')).click();
        // browser.sleep(1000);

        // element(by.id('testbutton')).click(); //6 ENABLE
        element(by.id('portalId')).click();
        // browser.sleep(1000);
        element(by.id('findsitterId')).click();

        // browser.sleep(2000);
        //7 Count 2nd time
        element.all(by.id('testLoop2')).then(function(elemsAfter){
            console.log(elemsAfter.length);
            var sittersCountAfter = elemsAfter.length;
            //Remove created sitter from DB?
            expect(sittersCountAfter-sitterCountBefore).toEqual(1); //8
            
            // good practice to make test fail until expects are written
            // expect(true).toBeFalsy();
        });  
    });

    it('1.0: Delete a sitter, after there should be one less', () => {
        browser.get('/portal/findsitter'); //1 redirects to login. because of auth
        
        browser.sleep(1000);
        //2
        element(by.id('username')).sendKeys('admin');
        browser.sleep(1000);
        element(by.id('password')).sendKeys('aD_min123');
        browser.sleep(1000);
        element(by.id('loginbutton')).click();

        browser.sleep(1000);
        element(by.id('findsitterId')).click();
        
        //3 Count 1st time
        var sitterCountBefore;
        element.all(by.id('testLoop2')).then(function(elemsAfter){ //css .example-card
            console.log(elemsAfter.length);
            sitterCountBefore = elemsAfter.length
        });

        browser.sleep(1000);
        element(by.id('deleteId')).click();

        browser.sleep(1000);
        //Error in API so to update the state go to findsitter again
        element(by.id('portalId')).click();
        browser.sleep(1000);
        element(by.id('findsitterId')).click();

        browser.sleep(2000);
        element.all(by.id('testLoop2')).then(function(elemsAfter){
            console.log(elemsAfter.length);
            var sittersCountAfter = elemsAfter.length;
            //Remove created sitter from DB?
            expect(sitterCountBefore-sittersCountAfter).toEqual(1); 
        });  
    });
});