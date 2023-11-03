import { page } from '@playwright/test';
class Test1 {
    constructor(page) {
        this.page = page; 
    }

    async ElementDisplay(element) {
        menu = page.eval_on_selector(element, 'el => el.style.display = "inline-block"')
        return;
    }
}

export default Test1;