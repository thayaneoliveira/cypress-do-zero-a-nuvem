//comando customizado

// Cypress.Commands.add("fillMandatoryFieldsAndSubmit", (data) => {
//   cy.get("#firstName").type("Thayane");
//   cy.get("#lastName").type("Oliveira");
//   cy.get("#email").type("thayane520.biel@gmail.com");
//   cy.get("#open-text-area").type("teste");
//   cy.get('button[type="submit"]').click();
// });

//  se o resultado for defaul ele já tras esses cmpos preenchidos
Cypress.Commands.add(
  "fillMandatoryFieldsAndSubmit",
  (
    data = {
      firsName: "thay",
      lastName: "Oliveira",
      email: "thayane520.biel@gmail.com",
      text: "Teste.",
    }
  ) => {
    cy.get("#firstName").type("Thayane");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("thayane520.biel@gmail.com");
    cy.get("#open-text-area").type("teste");
    cy.contains("button", "Enviar").click();
  }
);
