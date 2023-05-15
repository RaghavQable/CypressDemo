// actions on element

export function clickOnElement(locator, ...n) {
    // click on the element 
    cy.get(locator).eq(n).scrollIntoView().should('be.visible').click();
}

export function doubleClickOnElement(locator, ...n) {
    // action of the double click single element  
    cy.get(locator).eq(n).dblclick();
}

export function selectValue(locator, value, ...n) {
    //  select the input with specific value
    cy.get(locator).eq(n).select(value);
}

export function checkElement(locator, ...n) {
    //  to check checkboxes or radio inputs
    cy.get(locator).eq(n).check().should('be.checked');
}

export function checkValue(locator, value, ...n) {
    // to check checkboxes or radio inputs with specific value.
    cy.get(locator).eq(n).check(value);
}

export function uncheckElement(locator, ...n) {
    //  to uncheck checkboxes or radio inputs.
    cy.get(locator).eq(n).uncheck().should('not.be.checked');
}

export function uncheckValue(locator, value, ...n) {
    // to uncheck checkboxes or radio inputs with specific value.
    cy.get(locator).eq(n).uncheck(value);
}

export function clearText(locator, ...n) {
    // This function is used to clear the text from text-input
    cy.get(locator).eq(n).clear();
}

export function type(locator, value, ...n) {
    // This function is used to clear the input text and enter the string text. 
    cy.get(locator).eq(n).clear().type(value);
}

export function scrollToElement(locator) {
    //  this function use as the scrollIntoView if needed
    cy.get(locator).scrollIntoView();
}

export function scrollToPage(locator, position) {
    //A specified position to scroll the window or element to for eg. top,left,center,right,bottom.
    cy.get(locator).scrollTo(position);
}

export function submit(locator, ...n) {
    //  This function use for the submit the input
    cy.get(locator).eq(n).submit();
}

export function pageReload() {
    //  This function uses for the browser page reload action
    cy.reload();
}

export function readFile(filePath, value) {
    // this functions use for read file from specific path.
    // file path for eg. 'path/to/message.txt'
    cy.readFile(filePath).should('eq', value);
}

export function pageNavigate(direction) {
    //Navigate back or forward to the previous or next URL in the browser's history.
    //direction eg. 'back', 'forward', -1, 1
    //cy.go('back')
    cy.go(direction);
}

export function uncaughtException() {
    //To handle the error from the Web page under test,
    // This command always listens to the exceptions return false and will ignore these errors from failing tests.
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
