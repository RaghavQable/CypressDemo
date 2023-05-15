// actions on element

export function clickOnElement(locator, ...n) {
    // click on the element 
    cy.get(locator).eq(n).scrollIntoView().should('be.visible').click();
}

export function doubleClickOnElement(locator) {
    // action of the double click single element  
    cy.get(locator).first().dblclick();
}

export function selectValue(locator, value) {
    //  verify the element css value
    cy.get(locator).select(value);
}

export function checkElement(locator) {
    //  verify the this element is checked 
    cy.get(locator).check().should('be.checked');
}

export function checkValue(locator, value) {
    //verify the check same as element value 
    cy.get(locator).check(value);
}

export function uncheckElement(locator) {
    //  verify the element is unchecked 
    cy.get(locator).uncheck().should('not.be.checked');
}

export function uncheckValue(locator, value) {
    // verify the element the value is unchecked
    cy.get(locator).uncheck(value);
}

export function clearText(locator) {
    // /This function working as for the  input text box clear 
    cy.get(locator).clear();
}

export function type(locator, value) {
     // /This function working as for the  input text box clear and enter the string text 
    cy.get(locator).clear().type(value);
}

export function scrollToElement(locator) {
    //  this function use as the scrollIntoView if needed
    cy.get(locator).scrollIntoView();
}

export function scrollToPage(locator, position) {
    //A specified position to scroll the window or element to for eg. top,left,center,right,bottom.
    cy.get(locator).scrollTo(position);
}

export function submit(locator) {
    //  This function directly use for the submission.
    cy.get(locator).submit();
}

export function pageReload() {
    //  This function uses for the browser page reload action
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