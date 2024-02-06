import LoginPage from "../../pages/loginPage"
import HomePage from "../../pages/homePage"

const loginPage = new LoginPage();
const homePage = new HomePage();

describe('Check Login', () => {
    beforeEach('go to page', () => {
        cy.visit('/');
    });

    it('succesfully login user 1 to the GoIT page', () => {
        cy.fixture('user1.json').then((user) => {
            const useremail = user.email;
            const password = user.password;

            loginPage.loginUser(useremail, password);

        });
    });
    after(() => {
        homePage.logout();
        cy.wait(5000);
    });
});
