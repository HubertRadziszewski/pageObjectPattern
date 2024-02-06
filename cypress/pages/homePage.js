class HomePage {
    get openMenuButton() {
        return cy.get('#open-navigation-menu-mobile');
    }

    get logoutButton() {
        return cy.get(':nth-child(11) > .next-bve2vl');
    }

    logout() {
        this.openMenuButton.click();
        this.logoutButton.click();
    }
}
export default HomePage
