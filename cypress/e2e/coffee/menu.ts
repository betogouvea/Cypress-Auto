export class Menu {
    private readonly CHECKOUT_BUTTON: string = '[data-test="checkout"]';

    selectCheckout(): void {
        cy.get(this.CHECKOUT_BUTTON)
        .should('exist')
        .first()
        .click();
    }
    hoverCheckout(): void {
        cy.get(this.CHECKOUT_BUTTON)
        .should('exist')
        .trigger('mouseover')
        .should('be.visible');
    }

}