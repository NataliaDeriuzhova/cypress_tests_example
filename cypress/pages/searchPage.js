import { BasePage } from './basePage';


export class SearchPage extends BasePage {

    get searchInput() {
            return cy.get('.ant-select-search__field__mirror');
        }

}
