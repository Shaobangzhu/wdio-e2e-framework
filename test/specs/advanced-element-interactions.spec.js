describe('advanced element interactions - examples', () => {
    beforeEach(async function() {
        await browser.maximizeWindow();
    });

    it('inputs', async () => {
        await browser.url("/Contact-Us/contactus.html");
        const firstNameTextField = $("[name='first_name']");

        // Add more text value
        await firstNameTextField.addValue("Add your text here: ");
        await firstNameTextField.addValue("My added text.");
        // await browser.pause(2000);

        // Set value will overwrite all the exist text values
        await firstNameTextField.setValue("Hello, how are you?");
        // await browser.pause(2000);

        // All the current value are cleared
        await firstNameTextField.clearValue();
        // await browser.pause(2000);
    });
});