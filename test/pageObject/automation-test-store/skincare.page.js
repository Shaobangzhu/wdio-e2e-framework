import BasePage from "./base.page";
import ItemComponent from "../automation-test-store/components/item.comp"
import HeaderNavComponent from "./components/header-nav.comp";
import CartPage from "./cart.page";

class SkinCarePage extends BasePage {
    get itemComponent() {
        return ItemComponent;
    }

    async addSpecificItems_ValidateTotal(item1, item2) {
        const skincareProducts_Header_Links = await ItemComponent.itemHeaderLinks;

        const itemPrices = [];

        for(const header of skincareProducts_Header_Links) {
            const tempHeaderText = await header.getText();
            
            if(tempHeaderText.toLowerCase() == item1.toLowerCase()|| 
            tempHeaderText.toLowerCase() == item2.toLowerCase()) {
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
        
        await HeaderNavComponent.cartLink.click();
        await expect(browser).toHaveUrlContaining("checkout");

        var tempShippingRate = await CartPage.shippingRate.getText();

        var shippingRate = tempShippingRate.replace('$', '');
        itemsTotal = itemsTotal + parseFloat(shippingRate);

        // extract cart total
        var cartTotal = await CartPage.total.getText();
        cartTotal = cartTotal.replace('$', '');
        expect(itemsTotal).toEqual(parseFloat(cartTotal));
    }
}
export default new SkinCarePage();