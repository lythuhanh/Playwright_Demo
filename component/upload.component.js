import { page } from '@playwright/test';

class UploadComponent {

    constructor(page) {
        this.page = page;
        this.uploadInput = 'input#upfile_1'
        this.submitBtn = page.locator('#upload_1')
        this.successTxt = page.locator('#wfu_messageblock_header_1_label_1')
    }

    async uploadFile(filePath) {
        await this.page.setInputFiles(this.uploadInput, filePath);
        await this.submitBtn.click();
    }
}

export default UploadComponent;