# Cypress-Core

**Cypress-Core Framework**

**Simple to Use Framework for Cypress developed by QAble**

**Pre-requisite : [Node.js](https://nodejs.org/en) & NPM should be installed**

**Steps to Start :**
  1. Clone this repository into your local
  2. Navigate to root directory and execute this command ``npm install cypress --save-dev``
  3. Update the "baseURL" with your URL in cypress.config.js file for eg.
     ```
     const { defineConfig } = require('cypress')

     module.exports = defineConfig({
        e2e: {
           baseUrl: 'https://example.cypress.io',
        },
     })
     ```
   4. To open the Cypress Test Runner and run the tests: execute this command ``npx cypress open``
   5. To run tests in headless using CLI execute this command ``npx cypress run``
   6. To run specific spec file in headless use this command for eg. ``npx cypress run --spec "path/to/spec-file.spec.js"``

**Folder Structure**
```
--e2e(main)___
              |__Test__
	               |__spec.cy.js

--fixture__
           |__demo_data.json
       
--node_modules

--object_repository___
                      |__assertion
                      |           |__actions.js
                      |           |__mouse_actions.js
                      |           |__verifications.js
                      |           |__viewport.js
                      |
                      |__locators
                      |          |__demo_locator.js
                      |
                      |__moduleFunctions__
                      |                   |__demo_module.js
                      |
                      |__utils.js
     
--report
--screenshots
             |__demo_spec.png
--results
--support___
            |__command.js
            |__e2e.js

--cypress.config.js
--package-lock.json
--package.json
```
  
