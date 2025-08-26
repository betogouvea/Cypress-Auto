export class Menu {
    private readonly TOTAL: string = '[data-test="checkout"]';

    selectTotal(): void {
        cy.get(this.TOTAL)
        .first()
        .click();
    }
    checkTotal(): void {
        cy.get(this.TOTAL)
        .trigger('mouseover');
    }

}