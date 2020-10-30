import { BasePage } from './basePage';


export class Page extends BasePage {

    goToPage() {
            cy.visit(Cypress.env('baseUrl'));
            this.getByCustomId('main-header')
        }

    get searchButton() {
            return cy.get('.nav-search-icon');
        }

    get searchInput() {
            return this.getByCustomId('search-terms');
        }

    get magnifierButton() {
            return cy.get('.nav-search-form-icon');
        }

    get loginButton() {
            return this.getByCustomId('nv-login');
        }

    clickSearchButton() {
            this.searchButton.click();
        }

    clickMagnifierButton() {
            this.magnifierButton.click();
        }

    clickLoginButton() {
            this.loginButton.click();
        }
}
