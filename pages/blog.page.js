import { page } from '@playwright/test';

class BlogPage {
    constructor(page) {
        this.page = page;
        this.recentPostsList = page.locator('#recent-posts-3 ul li');
    }

    async navigate() {
        await this.page.goto('/blog');
    }
}

export default BlogPage;