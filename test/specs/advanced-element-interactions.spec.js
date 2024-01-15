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

    it('dropdowns', async () => {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
        const programmingLanguage_DropdownList = await $('#dropdown-menu-1');
        await programmingLanguage_DropdownList.selectByAttribute('value', 'python');
        await expect(programmingLanguage_DropdownList).toHaveValueContaining('python');
        // await browser.pause(2000);

        const tech_DropdownList = await $('#dropdown-menu-2');
        await tech_DropdownList.selectByIndex(2);
        await expect(tech_DropdownList).toHaveValueContaining('TestNG', {ignoreCase: true});
        // await browser.pause(2000);

        const fontendLanguage_DropdownList = await $('#dropdown-menu-3');
        await fontendLanguage_DropdownList.selectByVisibleText('CSS');
        await expect(tech_DropdownList).toHaveValueContaining('CSS', {ignoreCase: true});
        // await browser.pause(2000);

    });
});