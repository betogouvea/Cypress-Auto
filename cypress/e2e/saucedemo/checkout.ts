export class CheckOut {
  private readonly NAME_ITEM: string = '[data-test="inventory-item-name"]';
  private readonly YOUR_CART: string = '[data-test="shopping-cart-link"]';
  private readonly CHECK_OUT: string = '[data-test="checkout"]';

  visitCart(): void {
    cy.get(this.YOUR_CART)
    .first()
    .click();
  }
  confirmName(value: string): void {
    cy.get(this.NAME_ITEM)
    .contains(value)
    .should('be.visible');
  }
  finishBuy(): void {
    cy.get(this.CHECK_OUT)
    .first()
    .click();
  }
}
