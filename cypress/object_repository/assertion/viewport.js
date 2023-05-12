
export function viewport(x, y) {
    //cy.viewport(550, 750) Set viewport to 550px x 750px
    cy.viewport(x ? x : 1000, y ? y : 660);
}

export function ViewportEnv(device) {
    // devices: iphone-6, iphone-7, iphone-x, samsung-note9, samsung-s10, macbook-13, macbook-16
    cy.viewport(device);
}

module.exports = {
    viewport,
    ViewportEnv
}
