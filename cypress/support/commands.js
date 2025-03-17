// comando para login
Cypress.Commands.add("login", (username, password) => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });

// comando para adicionar item ao carrinho
Cypress.Commands.add("addProductToCart", () => {
    cy.get(".inventory_item:first .btn_inventory").click();
    cy.get(".shopping_cart_link").click();
  });

// Comando para check-out
Cypress.Commands.add("completeCheckout", (firstName, lastName, postalCode) => {
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
  });


// Pedir ao doug qual a melhor prática de aplicar os parametros   