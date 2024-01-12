describe('locating elements', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await browser.url("https://selectors.webdriveruniversity.com/");
    });

    // Find one element
    it('$ - locate element', async() => {
        await browser.$("//a[@href='#portfolio']").click();
        await browser.pause(3000);

        const webdriverioBtn = await $('[data-target="#portfolioModal1"]');
        await webdriverioBtn.click();
        await browser.pause(3000);
    });

    // Find elements
    it.only('$$ - locate elements', async() => {
        const expectedTitles = [
            "#",
            "First",
            "Last",
            "Handle",
            "1",
            "2",
            "3",
            "Firstname",
            "Lastname",
            "Age"
        ]
        const actualTitles = [];
        const tableHeaderTitles = await $$('//table//th');
        for (const title of tableHeaderTitles) {
            // console.log(await title.getText());
            actualTitles.push(await title.getText());
        }

        expect(expectedTitles).toEqual(actualTitles);
    });
});