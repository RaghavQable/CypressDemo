// actions on element

export function clickOnElement(locator) {
    cy.get(locator).click();
}

export function doubleClickOnElement(locator) {
    cy.get(locator).dblclick();
}

export function selectValue(locator, value) {
    cy.get(locator).select(value);
}

export function checkElement(locator) {
    cy.get(locator).check().should('be.checked');
}

export function checkValue(locator, value) {
    cy.get(locator).check(value);
}

export function uncheckElement(locator) {
    cy.get(locator).uncheck().should('not.be.checked');
}

export function uncheckValue(locator, value) {
    cy.get(locator).uncheck(value);
}

export function clearText(locator) {
    cy.get(locator).clear();
}

export function type(locator, value) {
    cy.get(locator).clear().type(value);
}

export function scrollToElement(locator) {
    cy.get(locator).scrollIntoView();
}

export function scrollToPage(locator, position) {
    //A specified position to scroll the window or element to for eg. top,left,center,right,bottom.
    cy.get(locator).scrollTo(position);
}

export function submit(locator) {
    cy.get(locator).submit();
}

export function pageReload() {
    cy.reload();
}

export function readFile(filePath, value) {
    // file path eg. 'path/to/message.txt'
    cy.readFile(filePath).should('eq', value);
}

export function pageNavigate(direction) {
    //Navigate back or forward to the previous or next URL in the browser's history.
    //direction eg. 'back', 'forward', -1, 1
    //cy.go('back')
    cy.go(direction);
}

export function uncaughtException() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
}

module.exports = {
    clickOnElement,
    doubleClickOnElement,
    selectValue,
    checkElement,
    uncheckElement,
    checkValue,
    uncheckValue,
    clearText,
    type,
    scrollToElement,
    scrollToPage,
    submit,
    readFile,
    pageReload,
    pageNavigate,
    uncaughtException
}