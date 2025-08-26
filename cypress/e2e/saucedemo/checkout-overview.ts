export class CheckoutOverview{
  private readonly PAY_INFO: string = '[data-test="payment-info-value"]';
  private readonly TOTAL_PRICE: string = '[data-test="total-label"]';
  private readonly DESCRIPTION: string = '[data-test="title"]';
  private readonly FINISH: string = '[data-test="finish"]';

  description(value: string): void {
    cy.get(this.DESCRIPTION)
    .contains(value);
  }
  information(value: string): void {
    cy.get(this.PAY_INFO)
    .contains(value);
  }
  totalPrice(value: string): void {
    cy.get(this.TOTAL_PRICE)
    .contains(value);
  }
  finishBuy(): void {
    cy.get(this.FINISH)
    .first()
    .click();
  }
}