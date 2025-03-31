# wdio-e2e-framework

This project is an automation testing framework implemented using [WebdriverIO](https://webdriver.io/), [Mocha](https://mochajs.org/), [Allure](https://docs.qameta.io/allure/), and [Jenkins](https://www.jenkins.io/). It facilitates efficient and scalable E2E testing for web applications.

## Features

- **WebdriverIO Integration**: Leverages WebdriverIO for robust browser automation.
- **Mocha Test Framework**: Utilizes Mocha for organizing and running test suites.
- **Allure Reporting**: Generates comprehensive and interactive test reports with Allure.
- **Jenkins CI/CD**: Designed for seamless integration with Jenkins for continuous testing.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Version 12 or higher. [Download Node.js](https://nodejs.org/)
- **Java**: Required for running Selenium Server. [Download Java](https://www.java.com/)
- **Chrome Browser**: Latest version recommended. [Download Chrome](https://www.google.com/chrome/)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Shaobangzhu/wdio-e2e-framework.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd wdio-e2e-framework
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Configuration

Update the wdio.conf.js file to set your desired configurations, such as test environments, browser options, and reporting preferences.

## Running Tests

Execute the test suites using the following command:

```bash
npm test
```

For running specific test files:

```bash
npx wdio wdio.conf.js --spec ./test/specs/example.spec.js
```

To run tests with a specific browser:

```bash
npx wdio wdio.conf.js --capabilities.browserName=firefox
```

## Reporting

**Allure Reports**
After test execution, generate and view Allure reports with:

```bash
npm run allure:generate
npm run allure:open
```

Ensure that the Allure Commandline is installed globally:

```bash
npm install -g allure-commandline
```

**Jenkins Integration**
For continuous integration and reporting in Jenkins:

- Install the Allure Jenkins Plugin: This allows Jenkins to process and display Allure reports.

- Configure Jenkins Pipeline: Set up your Jenkins pipeline to run tests and publish Allure reports. Refer to the Allure Jenkins Plugin Documentation for detailed instructions.

## Project Structure

- test/: Contains all test specifications and related resources.
- utils/: Utility functions and helpers for tests.
- wdio.conf.js: Configuration file for WebdriverIO.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
