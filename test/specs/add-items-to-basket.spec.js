describe('add items to basket', () => {
    beforeEach( async () => {
        await browser.maximizeWindow();
        await browser.url("https://automationteststore.com/");
    });

    it("add specific 'skincare products' to basket & validate car total", async () => {
        const skincareLinks = await $$("//a[contains(text(), 'Skincare')]");
        await skincareLinks[1].click();

        const skincareProducts_Header_Links = await $$('.fixed_wrapper .prdocutname');

        const itemPrices = [];

        for(const header of skincareProducts_Header_Links) {
            const tempHeaderText = await header.getText();
            
            if(tempHeaderText.toLowerCase() == "creme precieuse nuit 50ml" || 
            tempHeaderText.toLowerCase() == "total moisture facial cream") {
                const attr = await header.getAttribute("href");
                const itemId = attr.split("id=").pop();
                await $('//a[@data-id="' + itemId + '"]').click();

                itemPrices.push(
                    await $("//a[@data-id='" + itemId + "']/following-sibling::div/div[@class='pricenew']"
                    + "| //a[@data-id='" + itemId + "']/following-sibling::div/div[@class='oneprice']").getText()
                )
            }
            const formattedItemPrices = [];

            itemPrices.forEach((price) => {
                formattedItemPrices.push(price.replace("$", ""));
            });

            var itemsTotal = 0;
            formattedItemPrices.forEach(price => itemsTotal += parseFloat(price));
        }
        
        await $("//span[text()='Cart']").click();
        await expect(browser).toHaveUrlContaining("checkout");

        var tempShippingRate = await $("//span[text()='Flat Shipping Rate:']/../following-sibling::td").getText();
        var shippingRate = tempShippingRate.replace('$', '');
        itemsTotal = itemsTotal + parseFloat(shippingRate);

        // extract cart total
        var cartTotal = await $("//span[text()='Total:']/../following-sibling::td").getText();
        cartTotal = cartTotal.replace('$', '');
        expect(itemsTotal).toEqual(parseFloat(cartTotal));

        await browser.pause(5000);
    });
});