import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('http://test.stratsigner.com/Login.aspx?lang=en&retUrl=%2fDefault.aspx%3flang%3den');
  await page.locator('#txtEmail').click();
  await page.locator('#txtEmail').fill('tran.phuong.thao@kloon.vn');
  await page.locator('#txtEmail').press('Tab');
  await page.locator('#txtPassword').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
 
  //page.eval_on_selector(
  //  selector='span[class="icon-16  icon-dropdow"]', 
  //  expression="(el) => el.style.display = 'inline-block'",
  //)
 
  // await page.evaluate(() => { document.querySelector('span[class="icon-16  icon-dropdow"]').style.display = 'block'; });
  const menu = await page.locator('span[class="icon-16  icon-dropdow"]', { timeout: 30000 });
  await menu.evaluate((el) => el.style.display = 'inline');
  await menu.click()
 // await menu.click();
  await page.getByRole('menu').getByText('Edit').click();
  await page.getByRole('button', { name: 'Save and close' }).click();
  

});