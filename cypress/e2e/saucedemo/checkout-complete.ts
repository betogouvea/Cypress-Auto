export class CheckoutComplete {
  private readonly BACK_HOME: string = '[data-test="back-to-products"]';
  private readonly MESSAGE: string = '[data-test="complete-header"]';

  writeMessage(value: string): void {
    cy.get(this.MESSAGE)
    .contains(value)
    .should('be.visible');
  }
  backToMenu(): void {
    cy.get(this.BACK_HOME)
    .first()
    .click();
  }
}
