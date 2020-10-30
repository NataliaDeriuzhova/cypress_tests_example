//// ***********************************************
//// This example commands.js shows you how to
//// create various custom commands and overwrite
//// existing commands.
////
//// For more comprehensive examples of custom
//// commands please read more here:
//// https://on.cypress.io/custom-commands
//// ***********************************************
////
////
//// -- This is a parent command --
//// Cypress.Commands.add("login", (email, password) => { ... })
////
////
//// -- This is a child command --
//// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
////
////
//// -- This is a dual command --
//// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
////
////
//// -- This is will overwrite an existing command --
//// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//
//Cypress.Commands.add('login', params => {
//    return cy
//        .request('POST', `${Cypress.env('apiHost')}/auth`, {
//            email: '123@setinbox.com' || params.email,
//            password: '123@setinbox.com' || params.password,
//        })
//        .then(response => {
//            window.localStorage.setItem('game.auth_token', `"${response.body.token}"`);
//            return response.body;
//        });
//});
