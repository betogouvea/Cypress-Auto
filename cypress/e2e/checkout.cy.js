describe("Checkout Tests", () => {
  beforeEach(() => {
    cy.login("standard_user", "secret_sauce");
  });

  it("Deve finalizar a compra com sucesso", () => {
    cy.addProductToCart();
    cy.completeCheckout("BetoG", "QA", "14345");
    cy.get(".complete-header").should("contain", "Thank you");
  });
});
