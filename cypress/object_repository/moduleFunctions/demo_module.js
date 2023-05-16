const demoLocator = require('../locators/demo_locator');
const assert = require('../assertion/verifications');
const action = require('../assertion/actions')

export function verifyBackgroundColor(locator, bg, ...n) {
    // This function is use to verify background of element
    cy.get(locator).eq(n).should('have.css', 'background-color')
        .and('eq', bg)
}

export function clickAndVerifyRadioButton() {
    // This function is use to click on radio buttons and verify the radio buttons is selected
    for (let i = 1; i < 4; i++) {
        const radioXpath = `input[value='radio${i}']`;
        cy.get(radioXpath).click()
        assert.verifyChecked(radioXpath)
    }
}

export function verifyTypeInInput(locator, value) {
    // This function is use to type in suggestion input and verify the selected value
    action.type(locator, value)
    cy.get(demoLocator.practicePage.inputList).each(($el, index, $list) => {
        if ($el.text() === "France") {
            $el.click()
        }
    })
}

export function verifyAndSelectCheckbox() {
    // this function is use to check and uncheck the checkboxes
    for (let i = 1; i < 4; i++) {
        const locator = `#checkBoxOption${i}`;
        action.checkElement(locator)
        action.uncheckElement(locator)
    }
}

export function verifyWindowAlert(locator, AlertMsg) {
    // this function is use to click on alert and verify the alert message
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get(locator).click()
        .then(() => {
            expect(stub).to.be.calledWith(AlertMsg)
        })
}

export function verifyWindowConfirm(AlertMsg) {
    // this function is use to verify the confirm alert message.
    cy.on('window:confirm', (str) => {
        expect(str).to.equal(AlertMsg)
    })
}

export function verifyUrlRemoveAttr(locator, Attr, URL) {
    // this function is use to remove attribute for handle the new tab.
    cy.get(locator).invoke('removeAttr', Attr).click({ force: true })
    assert.screenshotOnPage()
    cy.window().then((newWin) => {
        cy.wrap(newWin).its('location.href').should('include', URL)
    })
}

export function verifyNewWindow(locator, hrefLink) {
    // this function is use to handle the popup window
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = hrefLink;
        }).as("popup")
        cy.get(locator).click({ force: true })
        cy.get('@popup')
            .should("be.called")
        cy.url().should('include', hrefLink)
    })
}

export function verifyTable(locator, tableText) {
    // this function is use to verify the specific value in table
    cy.get(locator).each(($el, index, $list) => {
        const text = $el.text()
        if (text.includes(tableText)) {
            cy.get(locator).eq(index).next().then(function (price) {
                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
        }
    })
}

export function verifyMouseHover(locator, buttonText, Text) {
    // this function is use for mouse hover and click on the element
    cy.get(locator).invoke('show')
    cy.contains(buttonText).click({ force: true })
    cy.url().should('include', Text)
}

export function frameLoad(locator) {
    // this function is use to load the i-frame
    cy.frameLoaded(locator);
}

export function verifyIFrame(locator, n) {
    // This function is use to find the element and click on it in iframe.
    cy.iframe().find(locator).eq(n).click();
}

export function verifyIFrameLength(locator, Num) {
    // this function is use to verify the element length in iframe
    cy.iframe().find(locator).should('have.length', Num)
}

export function typeFixtureData(locator, fileName, propertyName) {
    // this function is use to fetch data from fixture and type in input.
    cy.fixture(fileName).then(function (data) {
        action.type(locator, data[propertyName])
    })
}

export function selectFixtureData(locator, fileName, propertyName) {
    // this function is use to fetch data from fixture and select in input.
    cy.fixture(fileName).then(function (data) {
        action.selectValue(locator, data[propertyName])
    })
}

export function verifyFixtureData(locator, fileName, propertyName) {
    // this function is use to fetch data from fixture and verify the data with input.
    cy.fixture(fileName).then(function (data) {
        assert.verifyValue(locator, data[propertyName])
    })
}

module.exports = {
    verifyBackgroundColor,
    clickAndVerifyRadioButton,
    verifyTypeInInput,
    verifyAndSelectCheckbox,
    verifyWindowAlert,
    verifyWindowConfirm,
    verifyUrlRemoveAttr,
    verifyNewWindow,
    verifyTable,
    verifyMouseHover,
    frameLoad,
    verifyIFrame,
    verifyIFrameLength,
    typeFixtureData,
    selectFixtureData,
    verifyFixtureData,
}
