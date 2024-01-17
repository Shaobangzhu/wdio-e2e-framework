import HomePage from "../../pageObject/automation-test-store/home.page";
import SkinCarePage from "../../pageObject/automation-test-store/skincare.page";

describe('add items to basket', () => {

    it("add specific 'skincare products' to basket & validate car total", async () => {
        await HomePage.open();

        await HomePage.categoryMenuComponent.categoryMenuLink('Skincare')[1].click();

        await SkinCarePage.addSpecificItems_ValidateTotal("creme precieuse nuit 50ml", "total moisture facial cream");
    });
});