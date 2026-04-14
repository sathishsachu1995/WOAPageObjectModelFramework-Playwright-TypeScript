import { test } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { QuickQuotePage } from "../Pages/QuickQuotePage";
import { QuickQuoteRatesPage } from "../Pages/QuickQuoteRatesPage";
import { ExportDomesticPage } from "../Pages/ExportDomesticPage";
import { CollectionOptionPage } from "../Pages/CollectionOptionPage";
import { LabelsAndDocumentsPage } from "../Pages/LabelsAndDocumentsPage";
import { TrackingHistoryPage } from "../Pages/TrackingHistoryPage";
import { CommercialInvoicePage } from "../Pages/CommercialInvoicePage";
import quickQuoteTest from "../Test-data/quickQuoteInternational.json";

for(const quickQuoteTestData of quickQuoteTest){
test.setTimeout(1200000)
test(`The test title ${quickQuoteTestData.testTitle}`, async ({page,context}) => {
    const login = new LoginPage(page,context)
    const quickQuote = new QuickQuotePage(page,context)
    const quickQuoteRate = new QuickQuoteRatesPage(page,context)
    const exportPage = new ExportDomesticPage(page,context)
    const collectionPage = new CollectionOptionPage(page,context)
    const lablesAndShippingDocs = new LabelsAndDocumentsPage(page,context)
    const trackingHistory = new TrackingHistoryPage(page,context)
    const commercialInvoice = new CommercialInvoicePage(page,context)

    await login.loadingURL()                                                  //Loading page URL
    await quickQuote.clickingQuickQuotePage()                                 //This method will click QuickQuote page to fill shipment details
    await quickQuote.quickQuoteSpinner()                                      //This method will wait till quickQuote spinner loading complete
    await page.waitForTimeout(6000)                                           //This method will wait for 6 seconds before doing any action
    await quickQuote.clickingParcelorPallet(quickQuoteTestData.serviceType,quickQuoteTestData.packageType) //This method will click parcel or pallet button in quickquote page
    await quickQuote.clickingFromCountry(quickQuoteTestData.fromCountry)      //This method will select collection country from the dropdown
    await quickQuote.clickingToCountry(quickQuoteTestData.toCountry)          //This method will select delivery country from the dropdown
    await quickQuote.enteringFromPostcode(quickQuoteTestData.fromPostcode)    //This method will enter from postcode in the text field
    await quickQuote.enteringFromState(quickQuoteTestData.fromState)          //This method will enter from state in the text field
    await quickQuote.enteringFromCity(quickQuoteTestData.fromCity)            //This method will enter from city in the text field
    await quickQuote.enteringDeliveryPostcode(quickQuoteTestData.toPostcode)  // This method will enter delivery postcode in the text field 
    await quickQuote.enteringDeliveryState(quickQuoteTestData.toState)        //This method will enter delivery state in the text field 
    await quickQuote.enteringDeliveryCity(quickQuoteTestData.toCity)          //This method will enter delivery city in the text field
    await quickQuote.enteringWeight(quickQuoteTestData.weight)                //This method will enter weight in the text field
    await quickQuote.enteringLength(quickQuoteTestData.length)                //This method will enter length in the text field
    await quickQuote.enteringWidth(quickQuoteTestData.width)                  //This method will enter width in the text field
    await quickQuote.enteringHeight(quickQuoteTestData.height)                //This method will enter height in the text field
    await quickQuote.clickingMultiplePieces(quickQuoteTestData.count)         //This method will choose multiple pieces in the spin box
    await quickQuote.clickingResidential(quickQuoteTestData.residentialCollection,quickQuoteTestData.residentialDelivery) //This method will click Residential collection checkbox
    await quickQuote.clickingTailLift(quickQuoteTestData.tailLiftCollection,quickQuoteTestData.tailLiftDelivery)        //This method will click Taillift collection checkbox
    await quickQuote.clickingExhibitionDeliveryBX(quickQuoteTestData.exhibitionDelivery)  //This method will click Exhibition delivery checkbox
    await quickQuote.clickingPOBoxDeliverySTOnly(quickQuoteTestData.poBoxDelivery)        //This method will click PO Box delivery checkbox
    await quickQuote.clickingDangerousGoods(quickQuoteTestData.dangerousGoods)            //This method will click Dangerous goods checkbox
    await quickQuote.clickingHandUnloadBXOnly(quickQuoteTestData.handUnhold)              //This method will click Handunload checkbox
    await quickQuote.clickingMineSiteTollOnly(quickQuoteTestData.timeSlot)                //This method will click MineSite checkbox
    await quickQuote.clickingTimeSlotTollAndBXOnly(quickQuoteTestData.timeSlot)           //This method will click Timeslot checkbox
    await quickQuote.clickingFedEXSignature(quickQuoteTestData.FedExISR,quickQuoteTestData.FedExDSR,quickQuoteTestData.FedExASR)           //This method will click fedEx ISR checkbox
    await quickQuote.clickingQuoteButton()                                   //This method will click Quote button
    await quickQuote.quickQuoteSpinner()                                     //This method will wait till quickQuote spinner loading complete
    await quickQuoteRate.quickQuoteCarrierSpinner()                          //This method will wait till all carriers are getting loaded
    await quickQuoteRate.choosingMachshipCarrier(quickQuoteTestData.serviceType,quickQuoteTestData.machshipCarrier)  //This method will choose the different carriers and quote rates
    await quickQuoteRate.quickQuoteRatePageSpinner()                         //This method will wait till quickQuote rate page spinner loading complete
    await page.waitForTimeout(6000)                                          //This method will wait for 6 seconds before doing any action
    await exportPage.enteringCollectionCompanyName(quickQuoteTestData.collectionCompany)  //This method will enter collection company name in the text field
    await exportPage.enteringCollectionContactName(quickQuoteTestData.collectionConctact) //This method will enter collection contact name in the text field
    await exportPage.enteringCollectionAddress1(quickQuoteTestData.collectionAddress1)    //This method will enter collection address1 in the text field
    await exportPage.enteringCollectionDial(quickQuoteTestData.collectionDial)            //This method will enter collection Dial in the text field
    await exportPage.enteringCollectionPhone(quickQuoteTestData.collectionPhone)          //This method will enter collection phone number in the text field
    await exportPage.enteringCollectionEmailID(quickQuoteTestData.collectionEmail)        //This method will enter collection email ID in the text field
    await exportPage.enteringDeliveryCompanyName(quickQuoteTestData.deliveryCompany)      //This method will enter delivery company name in the text field
    await exportPage.enteringDeliveryContactName(quickQuoteTestData.deliveryContact)      //This method will enter delivery contact name in the text field
    await exportPage.enteringDeliveryAddress1(quickQuoteTestData.deliveryAddress1)        //This method will enter delivery address1 in the text field
    await exportPage.enteringDeliveryDial(quickQuoteTestData.deliveryDial)                //This method will enter delivery Dial in the text field
    await exportPage.enteringDeliveryPhone(quickQuoteTestData.deliveryPhone)              //This method will enter delivery phone number in the text field
    await exportPage.enteringDeliveryEmailID(quickQuoteTestData.deliveryEmail)            //This method will enter delivery email ID in the text field
    await exportPage.enteringCustomerRef(quickQuoteTestData.customerRef)                  //This method will enter customer reference number in the text field
    await exportPage.enteringTestDescription(quickQuoteTestData.description)              //This method will enter product description in the text field 
    await exportPage.choosingOriginCountry(quickQuoteTestData.originCountry)              //This method will choose the origin country from the dropdown
    await exportPage.clickingTransitInsurance(quickQuoteTestData.insurance)               //This method will click transit insurance radio button 'Yes' or 'No'
    //await exportPage.enteringDangerousGoods(quickQuoteTestData.uNNNumber,quickQuoteTestData.dgPackageType,quickQuoteTestData.dgPackageGroup)
    await exportPage.choosingCurrencyType(quickQuoteTestData.currency)
    await exportPage.enteringCustomValue(quickQuoteTestData.customValue)
    await exportPage.clickingCopytoAllIcon()
    await exportPage.clickingQuoteButton()
    await exportPage.exportPageSpinner()
    await exportPage.gettingRatesOrErrorMessage()
    await exportPage.clickingOKButton()
    await exportPage.clickingNextButton()
    await exportPage.exportPageSpinner()
    await commercialInvoice.readingQuoteAndPriceDetails()
    await commercialInvoice.choosingCommercialInvoiceImportPage(quickQuoteTestData.invoiceType,quickQuoteTestData.paperOrDigital,quickQuoteTestData.eORI,quickQuoteTestData.tAXID,quickQuoteTestData.iTNNumber,quickQuoteTestData.invoiceNo,quickQuoteTestData.goodsDescription,quickQuoteTestData.invoiceWeight,quickQuoteTestData.sourceCountry,quickQuoteTestData.commodityCode,quickQuoteTestData.quantity,quickQuoteTestData.unitPrice)
    await collectionPage.readingQuoteAndPriceDetails()
    await collectionPage.clickingDropAtDepot()
    await collectionPage.clickingShipButtonImportPage()
    await collectionPage.collectionPageSpinner()
    await page.waitForTimeout(3000)
    await lablesAndShippingDocs.gettingSuccessMessage()
    const trackingNumber = await lablesAndShippingDocs.gettingTrackingNo()
    await lablesAndShippingDocs.gettingFromAddress()
    await lablesAndShippingDocs.gettingToAddress()
    await lablesAndShippingDocs.clickingViewAndPrintlabel([quickQuoteTestData.labelUrl,trackingNumber])
    await page.waitForTimeout(3000)
    await lablesAndShippingDocs.clickingViewReceipt(quickQuoteTestData.receiptUrl)
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await lablesAndShippingDocs.clickingViewAndPrintCommercialInvoice(quickQuoteTestData.commercialInvoiceUrl)
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await lablesAndShippingDocs.clickingViewAndPrintManifest(quickQuoteTestData.manifestUrl)
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await lablesAndShippingDocs.clickingTrackingHistory()
    await lablesAndShippingDocs.labelsAndDocumentsPageSpinner()
    await trackingHistory.filteringConsingment(quickQuoteTestData.filterBy,trackingNumber)
    await trackingHistory.clickingRow(trackingNumber)
    await trackingHistory.trackingHistoryPageSpinner()
    await trackingHistory.clickingTrackingAndPOD()
    await trackingHistory.clickShippingDocument([quickQuoteTestData.labelUrl,trackingNumber],quickQuoteTestData.receiptUrl,quickQuoteTestData.manifestUrl,quickQuoteTestData.mailTo,quickQuoteTestData.starTrackManifest,quickQuoteTestData.filterBy,quickQuoteTestData.commercialInvoiceUrl,quickQuoteTestData.commercialInvoiceLogoUrl)
    await page.waitForTimeout(4000)
    await trackingHistory.clickingVoidButton()
    await page.waitForTimeout(3000)
    
})}