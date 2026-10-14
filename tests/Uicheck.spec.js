import { test, expect } from '@playwright/test';
//purpose :vaidate mouse actions
test("verify double click option", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('load');
    await page.locator("//button[text()='Copy Text']").dblclick();

});

test("drag and drop", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/", { waituntil: 'domcontentloaded' });
    await page.waitForLoadState('load');
    const sourceelement = page.locator("//p[text()='Drag me to my target']");
    const targetelement = page.locator("//p[text()='Drop here']");
    await sourceelement.dragTo(targetelement);
    await page.screenshot({ path: 'D:\executionscreenshots\Shots.png', fullPage: true });

});

test.only("mouse hower input options", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('load');

    const hoverButton = page.locator('//button[text()="Point Me"]');
    await hoverButton.hover();

    // 3. Wait for the dropdown menu item to become visible
    const mobilesLink = page.locator('//div/a[text()="Mobiles"]');
    await mobilesLink.waitFor({ state: 'visible' });

    // 4. Click the desired option from the dropdown menu
    await mobilesLink.click();
});

