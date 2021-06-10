///<reference types="Cypress"/>
Cypress.config().waitForAnimations = true; //oczekiwanie na elementy

describe("Booking a hotel in Poland", () => {
  //First page
  it("should open Travel page", () => {
    cy.visit("https://ula-nawrot.github.io/Travel-Website/?number=1");
  });
  it("should write Germany in input field", () => {
    cy.get(
      "#choosingCountry > header > .search > :nth-child(1) > .search__field"
    ).type("Germany");
  });
  it("should choose a date FROM", () => {
    const now = new Date();
    const day = 12;
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear() + 1;
    cy.get("#from").clear().type(`${year}-${month}-${day}`);
  });
  it("should choose a date TO", () => {
    const now = new Date();
    const day = 18;
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear() + 1;
    cy.get("#to").clear().type(`${year}-${month}-${day}`);
  });
  it("should select number of people", () => {
    cy.get("#people").select("2");
  });
  //code which doesn't work
  it("should click on SEARCH button", () => {
    cy.get(".search__btn").click({ force: true });
  });
  //Second page
  //   it("should click on BOOK button on second hotel", () => {
  //     cy.get(".hotels > :nth-child(2) > .booking > .btn").click();
  //   });
  //Third page
  //   it("should add taxi to the hotel as an additional option", () => {
  //     cy.get(".options > :nth-child(2)").click;
  //   });
  //   it("should type name and surname", () => {
  //     cy.get("#surname").type("Urszula Nawrot");
  //   });
  //   it("should type email address", () => {
  //     cy.get("#email").type("imie.nazwisko@gmail.com");
  //   });
  //   it("should select bank transfer option", () => {
  //     cy.get("#bank_transfer").click();
  //   });
  //   it("should click on CONFIRM button", () => {
  //     cy.get("#confirm").click();
  //   });
  //   //Page 4
  //   it("should close modal window", () => {
  //     cy.get(".close-modal").click();
  //   });
});
