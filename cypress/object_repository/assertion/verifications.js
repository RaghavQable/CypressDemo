// verification

export function verifyVisibility(locator, ...n) {
    // The verify the element is visible on the UI
    cy.get(locator).eq(n).should('be.visible');
}

export function screenshotOnElement(locator, ...n) {
    // The screenShot for single element 
    cy.get(locator).eq(n).screenshot();
}

export function screenshotOnPage() {
    // The screenShot of full Page.
    cy.screenshot();
}

export function verifyContainsText(locator, text, ...n) {
    // This function is used to locate and select a DOM element that contains the specified text.
    cy.get(locator).eq(n).should('contain', text);
}

export function verifyText(locator, text, ...n) {
    //  This function  is used to make an assertion about the text content of an element. It verifies that the selected element has the exact text specified in the assertion
    cy.get(locator).eq(n).should('have.text', text);
}

export function verifyValue(locator, text, ...n) {
    // verify the selected value
    cy.get(locator).eq(n).should('have.value', text);
};

export function verifyLength(locator, Num, ...n) {
    //  verify the length value of element
    cy.get(locator).eq(n).should('have.length', Num);
}

export function verifyEmpty(locator, ...n) {
    // verify the element is empty
    cy.get(locator).eq(n).should('be.empty');
}

export function verifyDisabled(locator, ...n) {
    //  verify the element is disabled 
    cy.get(locator).eq(n).should('be.disabled');
}

export function verifySelected(locator, ...n) {
    //  verify the element is selected
    cy.get(locator).eq(n).should('be.selected');
}

export function verifyChecked(locator, ...n) {
    // verify the radio/checkboxes input is checked
    cy.get(locator).should('be.checked')
}

export function verifyShouldNotHaveText(locator, text, ...n) {
    // verify the element value should not be same 
    cy.get(locator).eq(n).should('not.have.value', text);
}

export function verifyShouldNotExist(locator, ...n) {
    // verify the element is not present on UI.
    cy.get(locator).eq(n).should('not.exist');
}

export function verifySelectedValue(locator, text, ...n) {
    // verify the css value 
    cy.get(locator).eq(n).select(text).should('have.value', text);
}

export function verifyURL(endpoint) {
    //  verify the url endpoint is same as 
    cy.url().should('include', endpoint);
}

module.exports = {
    verifyVisibility,
    screenshotOnElement,
    screenshotOnPage,
    verifyContainsText,
    verifyText,
    verifyValue,
    verifyLength,
    verifyEmpty,
    verifyDisabled,
    verifySelected,
    verifyShouldNotHaveText,
    verifyShouldNotExist,
    verifySelectedValue,
    verifyURL,
    verifyChecked,
}
