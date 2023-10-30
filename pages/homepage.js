import { page } from '@playwright/test';
class HomePage {
    constructor(page) {
        this.page = page;
        this.getStartBtn = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
        this.homeLink = page.locator('#zak-primary-menu:has-text("Home")');
        this.searchIcon = page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]');
        this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
    }

    async navigate() {
        await this.page.goto('https://practice.sdetunicorns.com/')
    }

    getNavLinksText() {
        return this.navLinks.allTextContents()
    }
}

export default HomePage;