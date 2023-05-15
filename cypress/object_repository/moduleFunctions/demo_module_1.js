const demoLocator = require('../locators/demo_locator');
const assert = require('../assertion/verify');
const action = require('../MouseAction/actions')

export function verifyBackgroundColor(locator, bg, ...n) {
    cy.get(locator).eq(n).should('have.css', 'background-color')
        .and('eq', bg)
}

export function clickAndVerifyRadioButton() {
    for (let i = 1; i < 4; i++) {
        const radioXpath = `input[value='radio${i}']`;
        cy.get(radioXpath).click()
        assert.verifyChecked(radioXpath)
    }
}

export function verifyTypeInInput(locator, value) {
    action.type(locator, value)
    cy.get(demoLocator.practicePage.inputList).each(($el, index, $list) => {
        if ($el.text() === "France") {
            $el.click()
        }
    })
}

export function verifyAndSelectCheckbox() {
    for (let i = 1; i < 4; i++) {
        const locator = `#checkBoxOption${i}`;
        action.checkElement(locator)
        action.uncheckElement(locator)
    }
}

export function verifyWindowAlert(locator, AlertMsg) {
    //  window alert handle 
    const stub = cy.stub()
    cy.on('window:alert', stub)
    cy.get(locator).click()
        .then(() => {
            expect(stub).to.be.calledWith(AlertMsg)
        })
}

export function verifyWindowConfirm(AlertMsg) {
    cy.on('window:confirm', (str) => {
        expect(str).to.equal(AlertMsg)
    })
}

export function verifyUrlRemoveAttr(locator, Attr, URL) {
    cy.get(locator).invoke('removeAttr', Attr).click({ force: true })
    assert.screenshotOnPage()
    cy.window().then((newWin) => {
        cy.wrap(newWin).its('location.href').should('include', URL)
    })
}

export function verifyNewWindow(locator, hrefLink) {
    cy.window().then((win) => {
        cy.stub(win, 'open', url => {
            win.location.href = hrefLink;
        }).as("popup")
        cy.get(locator).click()
        cy.get('@popup')
            .should("be.called")
        cy.url().should('include', hrefLink)
    })
}

export function verifyTable(locator, tableText) {
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
    cy.get(locator).invoke('show')
    cy.contains(buttonText).click({ force: true })
    cy.url().should('include', Text)
}

export function frameLoad(locator) {
    cy.frameLoaded(locator);
}

export function verifyIFrame(locator, n) {
    cy.iframe().find(locator).eq(n).click();
}

export function verifyIFrameLength(locator, Num) {
    cy.iframe().find(locator).should('have.length', Num)
}

export function typeFixtureData(locator, fileName, propertyName) {
    cy.fixture(fileName).then(function (data) {
        action.type(locator, data[propertyName])
    })
}

export function selectFixtureData(locator, fileName, propertyName) {
    cy.fixture(fileName).then(function (data) {
        action.selectValue(locator, data[propertyName])
    })
}

export function verifyFixtureData(locator, fileName, propertyName) {
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
