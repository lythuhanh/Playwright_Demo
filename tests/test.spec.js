// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open Home page and verify title', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
    })

    test('Open Home page and verify title 2', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/about');
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Open Home page click on Get Start using CSS', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');
        await page.locator('#get-started').click();
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Verify heading text is visible using text selector', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');
        const headingText = await page.locator('text=Think different. Make different.');
        await expect(headingText).toBeVisible();
    })



    test('Verify Home link is enable using text and Css selector', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');
        // const homeText = await page.locator('#zak-primary-menu >> text= Home');
        const homeText = await page.locator('#zak-primary-menu:has-text("Home")');
        await expect(homeText).toBeEnabled();
    })



    test('Verify Search icon is visible using Xpath selector', async ({ page }) => {
        await page.goto('https://practice.automationbro.com/');
        const searchIcon = await page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]');
        await expect(searchIcon).toBeVisible();
    })

})