/// <reference types="cypress" />
describe("Central de Atendimento ao Cliente TAT", () => {
  //antes de casa teste esse beforeEach é executado
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    //Cypress._.repeat("abcdfghijklmnopqrstuvwxyz", 10), usado para digitar o texto de um forma rapida
    const longText = Cypress._.repeat("abcdfghijklmnopqrstuvwxyz", 10);
    cy.get("#firstName").type("Thayane");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("thayane520.biel@gmail.com");
    cy.get("#phone").type(984240118);
    cy.get("#open-text-area").type(longText, { delay: 0 }); //usando a const Cypress
    cy.contains("button", "Enviar").click();
    cy.get(".success").should("be.visible");
  });

  it("exibe mensagem de erro ao submeter o formulário com um e-mail com formatação inválida", () => {
    cy.get("#firstName").type("Thayane");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("thayane520.biel@gmail,com");
    cy.get("#phone").type(984240118);
    cy.get("#open-text-area").type("teste");
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("campo telefone continua vazio quando preenchido com um valor não-numérico", () => {
    cy.get("#phone").type("abdcde").should("have.value", ""); // quando o campo de telefone for string o valor vai retornar vazio
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido", () => {
    cy.get("#firstName").type("Thayane");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("thayane520.biel@gmail.com");
    cy.get("#open-text-area").type("teste");
    cy.get("#phone-checkbox").click();
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("#firstName")
      .type("Thayane")
      .should("have.value", "Thayane")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Oliveira")
      .should("have.value", "Oliveira")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("thayane520.biel@gmail.com")
      .should("have.value", "thayane520.biel@gmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type(984240118)
      .should("have.value", "984240118")
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    // cy.get("#firstName").type("");
    cy.get("#lastName").type("Oliveira");
    cy.get("#email").type("thayane520.biel@gmail,com");
    cy.get("#phone").type(984240118);
    cy.get("#open-text-area").type("teste");
    cy.contains("button", "Enviar").click();
    cy.get(".error").should("be.visible");
  });

  // it("envia o formuário com sucesso usando um comando customizado", () => {
  //   cy.fillMandatoryFieldsAndSubmit(); // comando customizado

  //   cy.get(".success").should("be.visible");
  // });

  it("envia o formuário com sucesso usando um comando customizado", () => {
    const data = {
      firsName: "thay",
      lastName: "Oliveira",
      email: "thayane520.biel@gmail.com",
      text: "Teste.",
    };
    cy.fillMandatoryFieldsAndSubmit(data);

    cy.get(".success").should("be.visible");
  });

  it("seleciona um produto (YouTube) por seu texto", () => {
    //para clicar no seletor e selecionar
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });

  it("seleciona um produto (Mentoria) por seu valor (value)", () => {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });

  it.only("seleciona um produto (Blog) por seu índice", () => {
    cy.get("#product").select(1).should("have.value", "blog");
  });
});
