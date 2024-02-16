import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Check Login', () => {
    beforeEach('go to page', () => {
        cy.visit('/');
    });

    it('User 1 successfully logs in and out from the GoIT page', () => {
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            loginPage.loginUser(useremail, password);
            cy.wait(4000);
            cy.url().should('include', 'homepage');
    
                homePage.logout();
                cy.wait(4000);

    });
        });
    });
