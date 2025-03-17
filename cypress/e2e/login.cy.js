describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Deve logar com sucesso", () => {
    cy.login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("Mensagem de erro ao logar", () => {
    cy.login("locked_out_user", "secret_sauce");
    cy.url().should("not.include", "/inventory.html");
    cy.get('[data-test="error"]').should("be.visible");
  });
});