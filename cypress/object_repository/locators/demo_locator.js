// user can import locators from here.

module.exports = {
     loginPage: {
        username: '#username',
        password: '#password',
        submit: '#submit',
        text: '.post-title',
    },
    logout: {
        logoutButton: '.wp-block-button__link',
    },
    practicePage: {
        logo: '.logoClass',
        header: 'h1',
        exampleTitle:'fieldset legend',
        radioButtons: 'fieldset label',
        input: '#autocomplete',
        inputList: 'li[class="ui-menu-item"] div',
        dropdown: 'select[id="dropdown-class-example"]',
        options: 'select',
        checkbox: 'input[type="checkbox"]',
        alertBtn: '#alertbtn',
        confirmBtn: '#confirmbtn',
        alertInput: '#name',
        tabBtn: '#opentab',
        newTabLogo: 'a[href="https://www.qaclickacademy.com"] img[src="images/qaclick1.png"]',
        openWindow: '#openwindow',
        table: 'tr td:nth-child(2)',
        mouseHover: '#mousehover',
        iFrame: '#courses-iframe',
        mentorship: 'a[href*="mentorship"]',
        pricingTitle: 'h1[class*="pricing-title"]',
        nameInput: ':nth-child(1) > .form-control',
        emailInput: 'input[name="email"]',
        passwordInput: 'input[id="exampleInputPassword1"]',
        genderInput: 'select[id="exampleFormControlSelect1"]',
        twoWayDataInput: '.ng-untouched',

    }
}
