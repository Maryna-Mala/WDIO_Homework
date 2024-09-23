# WDIO-Homework

WDIO Homework

# WDIO Testing Project for [Trello](https://trello.com/)

## About the Tool

This project is a test automation suite developed using [WebDriverIO](https://webdriver.io/) for the [Trello](https://trello.com/) website. The tool is designed to automate the testing of various functionalities on the Trello platform, ensuring a smooth and error-free user experience.

WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and stable test suite.

## How to Setup

To set up the WebDriverIO testing environment for this project, follow these steps:

1. **Clone the Repository**

    Clone the project repository to your local machine using the following command:

    `https://github.com/Maryna-Mala/WDIO_Homework.git`

2. **Navigate to the Project Directory**

    Change your current directory to the project folder

3. **Install Dependencies**

    Ensure you have Node.js installed on your system. Then, install the necessary dependencies by running:

    `npm install`

Ensure Google Chrome and Firefox are installed for the test execution involving two web browsers. If not, follow the instructions below:

4. **Install Google Chrome**

    Choose the appropriate OS and donwload Google Chrome from here `https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DAndroid`

5. **Install Firefox**

    Choose the appropriate OS and donwload Firefox from here `https://www.mozilla.org/en-US/firefox/new/`

## How to run

To execute the test cases in the WDIO project using headless mode, follow these instructions:


1. **Run Tests in Headless Mode**

    You can run tests directly in the terminal without a GUI, which is faster and useful for CI/CD pipelines:

    `npm run test`
    
    This will also generate the Spec report in the console and HTML reports in the `./reports/html-reports/` directory.

2. **Run Linting and Formatting Checks**

    Ensure your code adheres to set standards before running tests:

    To run Eslint: `npm run lint`

    To check formatting with Prettier: `npm run prettier:check`

    To auto-format files with Prettier: `npm run prettier:write`


3. **Run Tests Manually**

    To run tests manually, you can do it straight in the GitHub Actions:

    - Open "Actions" tab
    - In the sidemenu choose "Manual run" workflow
    - Click on the "Run workflow" and choose the appropriate branch


## Reports Configuration and Viewing

This project is configured to generate test reports in two formats: **Spec** and **HTML** to provide detailed insights into the test execution process.

### Spec Reporter

The Spec reporter outputs the test results in the console, allowing for quick iteration and debugging directly from the terminal. This is particularly useful during development and local testing phases.

### HTML Reporter

An HTML report provides a more detailed and visual insight into the test execution. Reports are generated after each test run and saved to `./reports/html-reports/`.

#### Viewing HTML Reports

To view the HTML reports, navigate to the `./reports/html-reports/` directory and open the `report.html` file in your web browser. This report will give you a visual breakdown of your test results, including test cases, status, and log details for failed tests.

#### Managing Report Artifacts

Report files are excluded from version control to keep the repository clean and focused on source code. However, historical reports are maintained locally to assist in debugging and review of past test results. Ensure to clean up or archive old reports as necessary.
## Contributors

    This project is developed and maintained by the following contributor:

    https://github.com/Maryna-Mala 

