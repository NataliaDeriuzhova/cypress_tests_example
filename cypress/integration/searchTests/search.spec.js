/// <reference types="Cypress" />

import { Page } from '../../pages/mainPage';

import { SearchPage } from '../../pages/searchPage';

describe('Search sth', () => {
    let page;
    let searchPage;

    before(() => {
            page = new Page();
            searchPage = new SearchPage();
            page.goToPage();
        });

    it('search test', () => {
        var searchTest = "test";
        page.clickSearchButton();
        page.searchInput.type(searchTest);
        page.clickMagnifierButton();
        searchPage.searchInput.should('contain', searchTest);
        });
    });
