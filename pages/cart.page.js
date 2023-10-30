import { page } from '@playwright/test';
import UploadComponent from '../component/upload.component';

class CartPage {
    constructor(page) {
        this.page = page;
    }

    uploadComponent() {
        return new UploadComponent(this.page);
    }
}

export default CartPage;