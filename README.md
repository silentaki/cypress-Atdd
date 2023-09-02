
# Cypress Automation: An E2E Test Automation Framework using cypress and node with KISS Approach - Keep it Super Simple.

### Pre-requisite Software

     1. Install Visual Studio Code (or may be your favourite IDE): [vscode](https://code.visualstudio.com/)
     2. Install node.js (npm) latest stable version: [node](https://nodejs.org/en)
     3. Browsers (Chrome is must): [chrome](https://www.google.com/chrome/)

  ### Part1: Installing Cypress
  - Check Node Version in terminal
    * ``node -v``
    * ``npm -v``
  - Create a folder under the documents for cypress. You can use commands in terminal too.
    * cd Documents
    * mkdir cypress
    * cd cypress
  - Open visual studio and open the folder cypress. Run the following commands in terminal
    * ``npm init`` : for package.json file creation 
    * ``npm install -D cypress`` : installing cypress
    * ``npx cypress open`` : starts cypress interface.

    Note: setup the interface to make sure you have folder structures created in vs code.

    ### Part2: Installing All dependencies.
  - We need to install following packages in order to setup the end to end framework.
    * Use this following command to install the mentioned packages. ``npm install -D packageName``
      ```cypress-junit-reporter
       cypress-log-to-output
       cypress-multi-reporters
       cypress-wait-until
       cypress-xpath
       mocha
       mochawesome
       mochawesome-merge
       mochawesome-report-generator
       moment

    ### Part2: Setting up Page Object Model, files structure and other requirements.
  - We will be creating folders: ``pages``( for functions/methods), ``selectors``(for writing locators), ``specs``(for automation)
    * Delete everything under e2e and create the following folders mentioned above
    * Goto ``cypress.config.js`` and copy it as it is from project
    * Goto ``support -> e2e.js`` and copy it as it is from project

  - We will be using website mentioned in the ``cypress.config.js`` file. We will create the file structure and follow the same way.

    * selectors folder: create a file ``GreencartSelector.js``. Define a class name always as a file name

      ```
      class GreencartSelector {
           write locators
         }
         export default new GreencartSelector
       ```  
        
   * pages folder: create a file ``GreencartPage.js``. Define a class name always as a file name. Import the selectors files
      
      ```
      import GreenCarSSelector from "../selectors/GreencartSelector.js"
        class GreenCartPage {
          write functions/ methods
        }
        export default GreenCartPage
      ```

   * spec folder: create a file ``Greencart.spec.js``. Import the pages files.
     ```
     import GreenCartPage from "../pages/GreencartPage";
     const greenCartPage = new GreenCartPage();

     describe("Green cart scenarios", () => {
     it("descripton", () => {
        write code
      });
    });
     ```

    ### Part3: Common ways for defining the xpath.
    ``` coming soon```

    ### Part4: Getting data from json file and using assertions
    ``` coming soon```

    ### Part5:  Running Tagged based scenarios
    ```coming soon```

    ### Part6:  Parallel executions
    ```coming soon```

    ### Part6:  Cypress Dashboard Configurations
    ```coming soon```



    

     



