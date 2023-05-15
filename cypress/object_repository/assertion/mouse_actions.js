// mouse action

export function mouseOver(locator) {
    cy.get(locator).should('be.visible').trigger('mouseover');
}

export function mouseDown(locator) {
    cy.get(locator).should('be.visible').trigger('mousedown');
}

export function mouseUp(locator) {
    cy.get(locator).should('be.visible').trigger('mouseup');
}

export function changeRangeInputValue(locator, number) {
    cy.get(locator).invoke('val', number).trigger('change')
}

module.exports = {
    mouseOver,
    mouseDown,
    mouseUp,
    changeRangeInputValue
}
