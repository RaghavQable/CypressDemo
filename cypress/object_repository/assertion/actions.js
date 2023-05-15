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
    //  verify the element css value
    cy.get(locator).eq(n).select(value);
}

export function checkElement(locator, ...n) {
    //  verify the this element is checked 
    cy.get(locator).eq(n).check().should('be.checked');
}

export function checkValue(locator, value, ...n) {
    //verify the check same as element value 
    cy.get(locator).eq(n).check(value);
}

export function uncheckElement(locator, ...n) {
    //  verify the element is unchecked 
    cy.get(locator).eq(n).uncheck().should('not.be.checked');
}

export function uncheckValue(locator, value, ...n) {
    // verify the element the value is unchecked
    cy.get(locator).eq(n).uncheck(value);
}

export function clearText(locator, ...n) {
    // /This function working as for the  input text box clear 
    cy.get(locator).eq(n).clear();
}

export function type(locator, value, ...n) {
     // /This function working as for the  input text box clear and enter the string text 
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
    //  This function directly use for the submission.
    cy.get(locator).eq(n).submit();
}

export function pageReload() {
    //  This function uses for the browser page reload action
    cy.reload();
}

export function readFile(filePath, value) {
    // this functions use for read file from specific path.
    // file path eg. 'path/to/message.txt'
    cy.readFile(filePath).should('eq', value);
}

export function pageNavigate(direction) {
    //Navigate back or forward to the previous or next URL in the browser's history.
    //direction eg. 'back', 'forward', -1, 1
    //cy.go('back')
    cy.go(direction);
}

export function uncaughtException() {\
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
