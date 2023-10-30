import { test, expect } from '@playwright/test';
import HomePage from '../pages/homepage';

test('Test upload file', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    // verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
})

test('Click get started button using CSS Selector', async ({ page }) => {
    const homePage = new HomePage(page);

    // open url
    await homePage.navigate()

    await expect(page).not.toHaveURL(/.*#get-started/);

    // click the button
    await homePage.getStartBtn.click()

    // verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
})

test('Verify heading text is visible using text selector', async ({ page }) => {
    const homePage = new HomePage(page);

    // open url
    await homePage.navigate()

    // find the text locator
    const headingText = await homePage.headingText
    // verify heading text is visible
    await expect(headingText).not.toBeHidden();
    await expect(headingText).toBeVisible();
})

test('Verify home link is enabled using text and css selector', async ({ page }) => {
    const homePage = new HomePage(page);

    // open url
    await homePage.navigate()

    // find the home text
    const homeText = await homePage.homeLink
    // verify home text is enabled
    await expect(homeText).toBeEnabled();
})

test('Verify search icon is visible using xpath selector', async ({ page }) => {
    const homePage = new HomePage(page);

    // open url
    await homePage.navigate()

    // find the search icon
    const searchIcon = await homePage.searchIcon
    // verify search icon is visible
    await expect(searchIcon).toBeVisible();
})

test('Verify text of all nav links', async ({ page }) => {
    const homePage = new HomePage(page);
    const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account",
    ];

   
    await homePage.navigate()

    // verify nav links text
    // expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    //expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
})
