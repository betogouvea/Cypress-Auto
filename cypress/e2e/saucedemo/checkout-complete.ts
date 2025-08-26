export class checkoutComplete{
  private readonly BACK_HOME: string = '[data-test="complete-header"]';
  private readonly MENSAGE: string = '[data-test="complete-header"]';

  writeMensage(value: string): void {
    cy.get(this.MENSAGE)
    .contains(value);
  }
  backToMenu(): void {
    cy.get(this.BACK_HOME)
    .first()
    .click();
  }
}
