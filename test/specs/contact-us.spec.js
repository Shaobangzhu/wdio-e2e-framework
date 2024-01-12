describe('webdriveruniversity - contact us page', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url("/Contact-Us/contactus.html");
    });
    it('valid submission - submit all information', async() => {
        // Arrange 
        // first name
        const firstName = await $('//*[@name="first_name"]');
        // last name
        const lastName = await $('//*[@name="last_name"]');
        // email address
        const email = await $('//*[@name="email"]');
        // message
        const msg = await $('//*[@name="message"]');
        // submit button
        const submitBtn = await $('//*[@value="SUBMIT"]');

        // Act
        await firstName.setValue("Andrew");
        await lastName.setValue("Lu");
        await email.setValue("clu2024@outlook.com");
        await msg.setValue("Hello Webdriver.IO");
        await submitBtn.click();

        // Assert
        const successfulSubmissionHeader = $('#contact_reply > h1');
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');
    });

    it.only('invalid submission - dont submit all information', async() => {
        // Arrange
        // first name
        const firstName = await $('//*[@name="first_name"]');
        // last name
        const lastName = await $('//*[@name="last_name"]');
        // message
        const msg = await $('//*[@name="message"]');
        // submit button
        const submitBtn = await $('//*[@value="SUBMIT"]');

        // Act
        await firstName.setValue("Andrew");
        await lastName.setValue("Lu");
        await msg.setValue("Hello Webdriver.IO");
        await submitBtn.click();

        // Assert
        const successfulSubmissionHeader = $('body');
        await expect(successfulSubmissionHeader).toHaveTextContaining(['Error: all fields are required', 'Error: Invalid email address']);
    });
});