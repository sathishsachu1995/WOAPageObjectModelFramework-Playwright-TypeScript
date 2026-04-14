import { test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { QuickQuotePage } from "../Pages/QuickQuotePage";
import { QuickQuoteRatesPage } from "../Pages/QuickQuoteRatesPage";
import { ExportDomesticPage } from "../Pages/ExportDomesticPage";
import { CollectionOptionPage } from "../Pages/CollectionOptionPage";
import { LabelsAndDocumentsPage } from "../Pages/LabelsAndDocumentsPage";
import { TrackingHistoryPage } from "../Pages/TrackingHistoryPage";
//import quickQuoteTestData from "../Test-data/quickQuoteDomestic.json";
//import  quickQuoteTestData  from "../Test-data/quickQuotePagePremiumTestData.json";
//import  quickQuoteTestData  from "../Test-data/quickQuotePageRoadExpressTestData.json";
import  quickQuoteTestData  from "../Test-data/quickQuotePageMaximumAllowedWOA.json";
for(const quickQuoteData of quickQuoteTestData){
test.setTimeout(300000)
test(`The test tile ${quickQuoteData.testTitle}`,async ({page,context}) => {

    const login = new LoginPage(page,context)
    const quickQuote = new QuickQuotePage(page,context)
    const quickQuoteRate = new QuickQuoteRatesPage(page,context)
    const exportPage = new ExportDomesticPage(page,context)
    const collectionPage = new CollectionOptionPage(page,context)
    const lablesAndShippingDocs = new LabelsAndDocumentsPage(page,context)
    const trackingHistory = new TrackingHistoryPage(page,context)

    await login.loadingURL()
    //await quickQuote.clickingQuickQuotePage()
    await quickQuote.quickQuoteSpinner()
    await page.waitForTimeout(6000)
    await quickQuote.clickingParcelorPallet(quickQuoteData.serviceType,quickQuoteData.packageType)
    await quickQuote.enteringFromPostcode(quickQuoteData.fromPostCode)
    await quickQuote.enteringFromState(quickQuoteData.fromState)
    await quickQuote.enteringFromCity(quickQuoteData.fromCity)
    await quickQuote.enteringDeliveryPostcode(quickQuoteData.toPostCode)
    await quickQuote.enteringDeliveryState(quickQuoteData.toState)
    await quickQuote.enteringDeliveryCity(quickQuoteData.toCity)
    await quickQuote.clickingResidential(quickQuoteData.residentialCollection,quickQuoteData.residentialDelivery)
    await quickQuote.enteringStreetAddressAllied(quickQuoteData.streetAddress)
    await quickQuote.enteringWeight(quickQuoteData.weight)
    await quickQuote.enteringLength(quickQuoteData.length)
    await quickQuote.enteringWidth(quickQuoteData.width)
    await quickQuote.enteringHeight(quickQuoteData.height)
    await quickQuote.clickingMultiplePieces(quickQuoteData.count)
    await quickQuote.clickingTailLift(quickQuoteData.tailGateCollectionCharge,quickQuoteData.tailGateDeliveryCharge)
    await quickQuote.clickingExhibitionDeliveryBX(quickQuoteData.exhibitionDelivery)
    await quickQuote.clickingPOBoxDeliverySTOnly(quickQuoteData.poBoxDelivery)
    await quickQuote.clickingDangerousGoods(quickQuoteData.dangerousGoods)
    await quickQuote.clickingHandUnloadBXOnly(quickQuoteData.handUnload)
    await quickQuote.clickingMineSiteTollOnly(quickQuoteData.mineSite)
    await quickQuote.clickingTimeSlotTollAndBXOnly(quickQuoteData.timeSlot)
    await quickQuote.clickingFedEXSignature(quickQuoteData.fedEXISR,quickQuoteData.fedEXDSR,quickQuoteData.fedEXASR)
    await quickQuote.clickingQuoteButton()
    await quickQuote.quickQuoteSpinner()
    await quickQuoteRate.quickQuoteCarrierSpinner()
    //await quickQuoteRate.testingMHFee(quickQuoteData.serviceType,quickQuoteData.serviceName,quickQuoteData.quickQuoteMHCharge)    //Testing startrack manual handling fee
    await quickQuoteRate.testingOversizeFee(quickQuoteData.serviceType,quickQuoteData.serviceName,quickQuoteData.quickQuoteMHCharge,quickQuoteData.quickQuoteOversizeFee)
    //await quickQuoteRate.testingTailGateCharges(quickQuoteData.tailGateCollectionCharge,quickQuoteData.tailGateDeliveryCharge)      //Testing TNT tailgate fee
    //await quickQuoteRate.choosingStarTrackCarrier(quickQuoteData.serviceType,quickQuoteData.serviceName)
    await quickQuoteRate.quickQuoteRatePageSpinner()
    /*await page.waitForTimeout(6000)
    await exportPage.enteringCollectionCompanyName(quickQuoteData.collectionCompany)
    await exportPage.enteringCollectionContactName(quickQuoteData.collectionContact)
    await exportPage.enteringCollectionAddress1(quickQuoteData.collectionAddress1)
    await exportPage.enteringCollectionDial(quickQuoteData.collectionDial)
    await exportPage.enteringCollectionPhone(quickQuoteData.collectionPhone)
    await exportPage.enteringCollectionEmailID(quickQuoteData.collectionEmail)
    await exportPage.enteringDeliveryCompanyName(quickQuoteData.deliveryCompany)
    await exportPage.enteringDeliveryContactName(quickQuoteData.deliveryContact)
    await exportPage.enteringDeliveryAddress1(quickQuoteData.deliveryAddress1)
    await exportPage.enteringDeliveryDial(quickQuoteData.deliveryDial)
    await exportPage.enteringDeliveryPhone(quickQuoteData.deliveryPhone)
    await exportPage.enteringDeliveryEmailID(quickQuoteData.deliveryEmail)
    await exportPage.enteringCustomerRef(quickQuoteData.customerRef)
    await exportPage.enteringTestDescription(quickQuoteData.description)
    await exportPage.clickingTransitInsurance(quickQuoteData.insurance)
    await exportPage.clickingQuoteButton()
    await exportPage.exportPageSpinner()
    //await exportPage.gettingRatesOrErrorMessage()
    //await exportPage.tailGateChargesValidation(quickQuoteData.tailGateCollectionCharge,quickQuoteData.tailGateDeliveryCharge) //Testing TNT tailgate fee in export/domestic page
    await exportPage.validatingMHFeeST(quickQuoteData.exportPageMHCharge)                                                     //Testing startrack manual handling fee in export/domestic page
    await exportPage.clickingOKButton()
    await exportPage.clickingNextButton()
    await exportPage.exportPageSpinner()
    await collectionPage.clickingDropAtDepot()
    await collectionPage.clickingShipButtonExportPage()
    await collectionPage.collectionPageSpinner()
    await page.waitForTimeout(3000)
    await lablesAndShippingDocs.gettingSuccessMessage()
    const trackingNumber = await lablesAndShippingDocs.gettingTrackingNo()
    await lablesAndShippingDocs.gettingFromAddress()
    await lablesAndShippingDocs.gettingToAddress()
    await lablesAndShippingDocs.clickingViewAndPrintlabel([quickQuoteData.labelUrl,trackingNumber])
    await page.waitForTimeout(3000)
    await lablesAndShippingDocs.clickingViewReceipt(quickQuoteData.receiptUrl)
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await lablesAndShippingDocs.clickingViewAndPrintManifest(quickQuoteData.manifestUrl)
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await lablesAndShippingDocs.clickingTrackingHistory()
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await trackingHistory.filteringConsingment(quickQuoteData.filterBy,trackingNumber)
    await trackingHistory.clickingRow(trackingNumber)
    await trackingHistory.trackingHistoryPageSpinner()
    await trackingHistory.clickingTrackingAndPOD()
    await trackingHistory.clickShippingDocument([quickQuoteData.labelUrl,trackingNumber],quickQuoteData.receiptUrl,quickQuoteData.manifestUrl,quickQuoteData.mailTo,quickQuoteData.starTrackManifest,quickQuoteData.filterBy,quickQuoteData.commercialInvoiceUrl,quickQuoteData.commercialInvoiceLogoUrl)
    await page.waitForTimeout(6000)
    await trackingHistory.clickingVoidButton()
    await page.waitForTimeout(3000)*/
})}