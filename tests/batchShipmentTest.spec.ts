import {test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { ShipManagerPage } from "../Pages/ShipManagerPage";
import testData  from "../Test-data/shipManagerTestData.json";


test.setTimeout(1200000)
test(`The Test Title ${testData.testTitle}`,async ({page,context}) => {

    const login = new LoginPage(page,context)
    const shipManager = new ShipManagerPage(page,context)

    await login.loadingURL()
    await shipManager.clickingShipManager()
    await shipManager.shipManagerSpinner()
    await page.waitForTimeout(6000)
    await shipManager.deleteAllRecords()
    await shipManager.uploadCSVFile(testData.template)
    await shipManager.clickingToggleButton()
    await shipManager.clickingBatchShipment()
    //await shipManager.shipManagerDropAtDepot()
    await shipManager.shipManagerScheduleACollection(testData.date,testData.parcelReadyFrom,testData.latestPickupTime)
    await shipManager.shipManagerSpinner()
    await shipManager.fillingBatchSummaryDetails(testData.batchName)
    await shipManager.dataValidation()
    
})

