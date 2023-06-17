// https://docs.cypress.io/api/table-of-contents

describe("ballancing interface", () => {
  it("it has basic display blocks", () => {
    cy.visit("/");
    cy.contains("div", "Элементы");
    cy.contains("div", "Итоговый баланс");
    cy.contains("div", "Информация");
  });

  it("it has redactor", () => {
    cy.visit("/");
    cy.contains("a.btn", "Изменить Модули").click();
    cy.contains("button", "экспорт").click();
    cy.contains("div", "импорт").click();
  });

  it("it can change ballance", () => {
    cy.visit("/");
    cy.contains("button", " + ").click();
    cy.contains("button", " + ").click();
    cy.contains("button", " - ").click();

    cy.contains("li", "healthBoost : 28.57");
  });
});
