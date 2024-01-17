import allureReporter from "@wdio/allure-reporter";
import ContactUsPage from "../../pageObject/webdriver-university/contact-us.page";
import contactUsPage from "../../pageObject/webdriver-university/contact-us.page";

describe('webdriveruniversity - contact us page', function() {

    // If the test suite fail, it will retry the test ONCE.
    // this.retries(1);

    beforeEach(async () => {
        await ContactUsPage.open();
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    });

    it.only('valid submission - submit all information', async function() {
        // Re-try an individual test case
        // this.retries(2);

        // Allure Customized Feature
        allureReporter.addFeature("Contact us Page - valid Submission");
        allureReporter.addDescription("Validate contact us page by submitting all data.");
        allureReporter.addSeverity("critical");

        // ContactUsPage.submitForm("Andrew", "Lu", "clu2024@outlook.com", "Hello Webdriver.IO");
        ContactUsPage.submitForm_UsingRandomData("Andrew", "Lu");

        await expect(contactUsPage.successfulSubmissionHeader).toHaveText('Thank You for your Message!');
    });

    it('invalid submission - dont submit all information', async() => {
        // Allure Customized Feature
        allureReporter.addFeature("Contact us Page - invalid Submission");
        allureReporter.addDescription("Validate contact us page by NOT submitting all data.");
        allureReporter.addSeverity("blocker");
       
        ContactUsPage.submitForm("Andrew", "Lu", "", "Hello Webdriver.IO");

        await expect(contactUsPage.unsuccessfulSubmissionHeader).toHaveTextContaining(['Error: all fields are required', 'Error: Invalid email address']);
    });

    it('only type a first name', async () => {
        ContactUsPage.submitForm("Chaoran", "", "", "");
        await expect(contactUsPage.unsuccessfulSubmissionHeader).toHaveTextContaining(['Error: all fields are required', 'Error: Only type a first name']);
    });
});