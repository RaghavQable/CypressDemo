// verification

export function verifyVisibility(locator, ...n) {
    cy.get(locator).eq(n).should('be.visible');
}

export function screenshotOnElement(locator, ...n) {
    cy.get(locator).eq(n).screenshot();
}

export function screenshotOnPage() {
    cy.screenshot();
}

export function verifyContainsText(locator, Text, ...n) {
    cy.get(locator).eq(n).contains(Text);
}

export function verifyText(locator, Text, ...n) {
    cy.get(locator).eq(n).should('have.text', Text);
}

export function verifyValue(locator, Text, ...n) {
    cy.get(locator).eq(n).should('have.value', Text);
}

export function verifyLength(locator, Num, ...n) {
    cy.get(locator).eq(n).should('have.length', Num);
}

export function verifyEmpty(locator, ...n) {
    cy.get(locator).eq(n).should('be.empty');
}

export function verifyDisabled(locator, ...n) {
    cy.get(locator).eq(n).should('be.disabled');
}

export function verifySelected(locator, ...n) {
    cy.get(locator).eq(n).should('be.selected');
}

export function verifyChecked(locator, ...n) {
    cy.get(locator).should('be.checked')
}

export function verifyShouldNotHaveText(locator, Text, ...n) {
    cy.get(locator).eq(n).should('not.have.value', Text);
}

export function verifyShouldNotExist(locator, ...n) {
    cy.get(locator).eq(n).should('not.exist');
}

export function verifySelectedValue(locator, Text, ...n) {
    cy.get(locator).eq(n).select(Text).should('have.value', Text);
}

export function verifyURL(endpoint) {
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
