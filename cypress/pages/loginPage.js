import { BasePage } from './basePage';


export class LoginPage extends BasePage {

    get loginTitle() {
        return this.getByCustomId('page_new_title');
    }

    get emailInput() {
        return this.getByCustomId('emailAddress');
    }

    get passwordInput() {
        return this.getByCustomId('password');
    }

    get loginButton() {
        return this.getByCustomId('loginButton');
    }

    get showPasswordButton() {
            return cy.get('.password-visibility.mat-icon.notranslate.mat-icon-no-color');
        }

    get email_error() {
        return this.getByCustomId('mat-error-0');
    }

    get password_error() {
        return this.getByCustomId('mat-error-1');
    }

    get captcha_error() {
        return this.getByCustomId('mat-error-2');
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    clickChowPasswordButton() {
            this.showPasswordButton.click();
        }
}
