export class DetalhesPagamento {
    private readonly BTN_SUBMIT: string = '#submit-payment';
    private readonly EMAIL: string = '#email';
    private readonly NAME: string = '#name';

    inviteName(value: string): void{
        if (!value) throw new Error('Name cannot be empty');
        cy.get(this.NAME)
        .first()
        .click()
        .type(value);
    }
    inviteEmail(value: string): void {
        if (!value) throw new Error('Email cannot be empty');
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
    confirmMessage(): void {
        cy.get('.snackbar')
        .should('be.visible')
        .and('contain.text', 'Thanks for your purchase. Please check your email for payment.');
    }
}