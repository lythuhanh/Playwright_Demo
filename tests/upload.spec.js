import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
import HomePage from '../pages/homepage';
const path = require('path');   

    test('should upload a test file', async ({ page }) => {
        const cartPage = new CartPage(page);
        const homePage = new HomePage(page);
        // Open url
        await page.goto("https://practice.sdetunicorns.com/cart/", { timeout: 10000 });

        // provide test file path
        const filePath = path.join(__dirname, '../data/images.jpg');
        cartPage.uploadComponent().uploadFile(filePath);

        // assertion
        await expect(cartPage.uploadComponent().successTxt)
            .toContainText('uploaded successfully', { timeout: 10000 });
    })