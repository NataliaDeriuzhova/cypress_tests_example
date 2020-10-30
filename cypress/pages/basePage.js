export class BasePage {
    timeToWait = 30000;

    getByCustomId(value) {
        return cy.get(`[${Cypress.env('testId')}=${value}]`, { timeout: this.timeToWait });
    }
}
