/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

import locator from "../../object_repository/locators/demo_locator";
const verify = require('../../object_repository/assertion/validation')
import specPath from "../../object_repository/utils";
const action = require('../../object_repository/assertion/actions')
const viewport = require('../../object_repository/assertion/viewport')
const demoModule = require('../../object_repository/moduleFunctions/demo_module_1')

describe('demo spec', () => {
  action.uncaughtException()

  it('visit login page', () => {
    cy.visit(specPath.BasePath.loginURL)
  });

  it('user login', () => {
    cy.login(locator.loginPage.username, locator.loginPage.password)
    action.clickOnElement(locator.loginPage.submit)
    verify.verifyText(locator.loginPage.text, 'Logged In Successfully')
  })

  it('user logout', { scrollBehavior: false }, () => {
    action.clickOnElement(locator.logout.logoutButton)
  })

  it('visit new demo page', () => {
    cy.visit(specPath.BasePath.demoURL)
  })

  const newPageURL = 'https://www.qaclickacademy.com/';

  it('verify URL and header', { scrollBehavior: false }, () => {
    verify.verifyURL('/AutomationPractice')
    verify.verifyVisibility(locator.practicePage.logo)
    verify.screenshotOnElement(locator.practicePage.logo)
    verify.verifyText(locator.practicePage.header, 'Practice Page')
    viewport.ViewportEnv('iphone-6')
    verify.screenshotOnPage()
    viewport.viewport()
  })

  it('verify Radio button', { scrollBehavior: false }, () => {
    verify.verifyText(locator.practicePage.exampleTitle, 'Radio Button Example', 0)
    demoModule.verifyBackgroundColor(locator.practicePage.exampleTitle, 'rgb(43, 54, 54)', 0)
    demoModule.clickAndVerifyRadioButton()
  })

  it('verify input', { scrollBehavior: false }, () => {
    verify.verifyText(locator.practicePage.exampleTitle, 'Suggession Class Example', 1)
    demoModule.verifyBackgroundColor(locator.practicePage.exampleTitle, 'rgb(43, 54, 54)', 1)
    verify.verifyVisibility(locator.practicePage.input)
    demoModule.verifyTypeInInput(locator.practicePage.input, 'fra')
    verify.verifyValue(locator.practicePage.input, "France")
  })

  it('verify dropdown', { scrollBehavior: false }, () => {
    verify.verifyText(locator.practicePage.exampleTitle, 'Dropdown Example', 2)
    verify.verifyVisibility(locator.practicePage.dropdown)
    action.selectValue(locator.practicePage.options, 'Option1')
    verify.verifySelectedValue(locator.practicePage.dropdown, 'option1')
  })

  it('verify checkbox', { scrollBehavior: false }, () => {
    verify.verifyText(locator.practicePage.exampleTitle, 'Checkbox Example', 3)
    demoModule.verifyAndSelectCheckbox(locator.practicePage.checkbox)
  })

  it('verify alert', { scrollBehavior: false }, () => {
    const alertMsg = 'Hello Test, share this practice page and share your knowledge';
    const confirmMsg = 'Hello , Are you sure you want to confirm?';

    verify.verifyText(locator.practicePage.exampleTitle, 'Switch To Alert Example', 6)
    action.type(locator.practicePage.alertInput, "Test")
    action.clickOnElement(locator.practicePage.alertBtn)
    demoModule.verifyWindowAlert(locator.practicePage.alertBtn, alertMsg)
    action.clickOnElement(locator.practicePage.confirmBtn)
    demoModule.verifyWindowConfirm(confirmMsg)
  })

  it('verify tab', { scrollBehavior: false }, () => {
    verify.verifyText(locator.practicePage.exampleTitle, 'Switch Tab Example', 5)
    demoModule.verifyUrlRemoveAttr(locator.practicePage.tabBtn, 'target', newPageURL)
    cy.visit(specPath.BasePath.demoURL)
  })

  it('verify window', { scrollBehavior: false }, () => {
    demoModule.verifyNewWindow(locator.practicePage.openWindow, newPageURL)
    cy.visit(specPath.BasePath.demoURL)
  })

  it('verify web table', () => {
    demoModule.verifyTable(locator.practicePage.table, "Python")
  })

  it('verify mouse Hover', () => {
    demoModule.verifyMouseHover(locator.practicePage.mouseHover, "Top", "top")
  })

  it('verify iFrame', () => {
    demoModule.frameLoad(locator.practicePage.iFrame)
    demoModule.verifyIFrame(locator.practicePage.mentorship, 0)
    // demoModule.verifyIFrameLength(locator.practicePage.pricingTitle,2)
  })

  it('verify fetch data from fixture', () => {
    cy.visit(specPath.BasePath.practiceURL)
    const fileName = 'demoData';

    demoModule.typeFixtureData(locator.practicePage.nameInput, fileName, "name")
    demoModule.typeFixtureData(locator.practicePage.emailInput, fileName, "email")
    demoModule.typeFixtureData(locator.practicePage.passwordInput, fileName, "password")
    demoModule.selectFixtureData(locator.practicePage.genderInput, fileName, "gender")
    demoModule.verifyFixtureData(locator.practicePage.twoWayDataInput, fileName, "name")
  })
})
