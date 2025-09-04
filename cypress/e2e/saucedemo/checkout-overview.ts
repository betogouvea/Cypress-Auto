export class CheckoutOverview{
  private readonly PAY_INFO: string = '[data-test="payment-info-value"]';
  private readonly TOTAL_PRICE: string = '[data-test="total-label"]';
  private readonly DESCRIPTION: string = '[data-test="title"]';
  private readonly FINISH: string = '[data-test="finish"]';

  description(value: string): void {
    cy.get(this.DESCRIPTION)
    .should('contain', value)
    .and('be.visible');
  }
  information(value: string): void {
    cy.get(this.PAY_INFO)
    .should('contain', value)
    .and('be.visible');
  }
  totalPrice(value: string): void {
    cy.get(this.TOTAL_PRICE)
    .should('contain', value)
    .and('be.visible');
  }
  finishBuy(): void {
    cy.get(this.FINISH)
    .click();
  }
}