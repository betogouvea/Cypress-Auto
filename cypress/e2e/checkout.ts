export class CheckOut {
  private readonly NAME_ITEM: string = '[data-test="inventory-item-name"]';
  private readonly YOU_CART: string = '[data-test="shopping-cart-link"]';
  private readonly CHECK_OUT: string = '[data-test="checkout"]';

  visitCart(): void {
    cy.get(this.YOU_CART)
    .first()
    .click();
  }
  confirmName(value: string): void {
    cy.get(this.NAME_ITEM)
    .contains(value);
  }
  finishBuy(): void {
    cy.get(this.CHECK_OUT)
    .first()
    .click();
  }
}
