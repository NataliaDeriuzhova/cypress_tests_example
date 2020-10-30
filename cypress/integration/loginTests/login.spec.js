/// <reference types="Cypress" />

import { Page } from '../../pages/mainPage';

import { LoginPage } from '../../pages/loginPage';

describe('Log in', () => {
    let page;
    let loginPage;

    before(() => {
            page = new Page();
            loginPage = new LoginPage()
            page.goToPage();
            page.clickLoginButton();
            loginPage.loginTitle.should('be.visible');
        });

    it('empty credentials test', () => {
            loginPage.emailInput.should('be.visible');
            loginPage.clickLoginButton();
            loginPage.emailInput.invoke('attr', 'aria-invalid').should('contain', 'true');
            loginPage.passwordInput.invoke('attr', 'aria-invalid').should('contain', 'true');
            loginPage.email_error.should('be.visible');
            loginPage.password_error.should('be.visible');
            loginPage.captcha_error.should('be.visible');
        });

    it('incorrect email test', () => {
            loginPage.emailInput.should('be.visible');
            loginPage.emailInput.type("test");
            loginPage.emailInput.invoke('attr', 'aria-invalid').should('contain', 'true');

        });

    it('show button test', () => {
            loginPage.passwordInput.type("test");
            loginPage.clickChowPasswordButton();
            loginPage.passwordInput.invoke('attr', 'type').should('eq', 'text')
            loginPage.clickChowPasswordButton();
            loginPage.passwordInput.invoke('attr', 'type').should('eq', 'password')
        });
    });
