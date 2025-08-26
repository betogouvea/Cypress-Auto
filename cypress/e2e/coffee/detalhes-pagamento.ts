export class DetalhesPagamento {
    private readonly BTN_SUBMIT: string = '#submit-payment';
    private readonly PAYMENT_DETAIL: string = '.snackbar';
    private readonly EMAIL: string = '#email';
    private readonly NAME: string = '#name';

    inviteName(value: string): void{
        cy.get(this.NAME)
        .first()
        .click()
        .type(value);
    }
    inviteEmail(value: string): void {
        cy.get(this.EMAIL)
        .first()
        .click()
        .type(value);
    }
    endShop(): void {
        cy.get(this.BTN_SUBMIT)
        .first()
        .click();
    }
    confirmMensage(): void {
        cy.get(this.PAYMENT_DETAIL)
        .should('be.visible')
        .and('contain.text', 'Thanks for your purchase. Please check your email for payment.');
    }
}