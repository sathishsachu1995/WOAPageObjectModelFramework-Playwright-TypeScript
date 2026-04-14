import { test} from "@playwright/test";

test(`amazon login`,async ({page}) => {

    await page.goto(`https://www.amazon.in/`)
    await page.waitForTimeout(5000)
    
})