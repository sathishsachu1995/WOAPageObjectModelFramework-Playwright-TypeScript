import { Page,BrowserContext, expect } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";
import { UrlConstants } from "../Constants/urlConstants";

export class ExportDomesticPage extends PlaywrightWrapper{

    static preliveExportUrl = UrlConstants.preliveExportPageUrl

    constructor(page:Page, context: BrowserContext){
        super(page,context)
    }

    async clickingExportPage(): Promise<void>{
        await this.clickButton(`//img[@title='Ship']`,`Ship`,`Button`)
        await this.clickButton(`//a[text()='Export/Domestic']`,`Export/Domestic`,`Button`)
    }

    async enteringCollectionCompanyName(collectionCompany: string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/preceding::input[@placeholder='Company']`,`Collection Company`,collectionCompany)

    }

    async enteringDeliveryCompanyName(deliveryCompany:string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/following::input[@placeholder='Company']`,`Delivery Company`,deliveryCompany)

    }

    async enteringCollectionContactName(collectionConctact: string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/preceding::input[@placeholder='Contact Name']`,`Collection Contact`,collectionConctact)

    }

    async enteringDeliveryContactName(deliveryContact:string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/following::input[@placeholder='Contact Name']`,`Delivery Contact`,deliveryContact)

    }

    async enteringCollectionAddress1(collectionAddress1: string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/preceding::input[@placeholder='Address 1']`,`Collection Address1`,collectionAddress1)

    }

    async enteringDeliveryAddress1(deliveryAddress1:string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/following::input[@placeholder='Address 1']`,`Delivery Address1`,deliveryAddress1)
    
    }

    async enteringCollectionCountry(collectionCountry: string): Promise<void>{
        await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/preceding::mat-select[@placeholder='Select country']`,`Collection Country`,`Drop Down`)
        await this.locatorChainingClick(`Collection Country`,collectionCountry,`span`)

    }

    async clickingDeliveryCountry(deliveryCountry:string): Promise<void>{
        await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/following::mat-select[@placeholder='Select country'][1]`,`Delivery Country`,`Drop Down`)
        await this.locatorChainingClick('Delivery Country',deliveryCountry,'span')
    }

    async clickingCollectionState(collectionState: string, collectionCountry: string): Promise<void>{
        try {
            
            if (collectionCountry === "USA" || collectionCountry === "AUSTRALIA") {
               await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/preceding::mat-select[@placeholder='Select state']`,`Collection State`,`Drop Down`)
               await this.locatorChainingClick(`Collection State`,collectionState,`span`)   
            }
        } catch (error) {
            console.log(`The Error we are getting ${error}`); 
        }
    }

    async clickingDeliveryState(deliveryState:string,deliveryCountry: string): Promise<void>{
        try {
            if (deliveryCountry === "USA" || deliveryCountry === "AUSTRALIA") {
               await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/following::mat-select[@placeholder='Select state']`,`Delivery State`,`Drop Down`)
               await this.locatorChainingClick('Delivery State',deliveryState,'span')   
            }
        } catch (error) {
            console.log(`The Error we are getting ${error}`); 
        }
    }


    async enteringCollectionCity(collectionCity: string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/preceding::input[@placeholder='City']`,`Collection City`,collectionCity)

    }

    async enteringDeliveryCity(deliveryCity:string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/following::input[@placeholder='City']`,`Delivery City`,deliveryCity)

    }

    async enteringCollectionPostcode(collectionPostcode: string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/preceding::input[@placeholder='Post code']`,`Collection Postcode`,collectionPostcode)

    }

    async enteringDeliveryPostcode(deliveryPostcode:string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/following::input[@placeholder='Post code']`,`Delivery Postcode`,deliveryPostcode)
        
    }

    async enteringCollectionDial(collectionDial: string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/preceding::input[@placeholder='Country Code']`,`Collection Dialcode`,collectionDial)

    }

    async enteringDeliveryDial(deliveryDial:string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/following::input[@placeholder='Country Code']`,`Delivery Dialcode`,deliveryDial)
        
    }

    async enteringCollectionPhone(collectionPhone: string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/preceding::input[@placeholder='Area Code and Phone No']`,`Collection Phone`,collectionPhone)

    }

    async enteringDeliveryPhone(deliveryPhone:string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/following::input[@placeholder='Area Code and Phone No']`,`Delivery Phone`,deliveryPhone)
        
    }

    async enteringCollectionEmailID(collectionEmail: string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/preceding::input[@placeholder='Email address']`,`Collection Email Address`,collectionEmail)

    }

    async enteringDeliveryEmailID(deliveryEmail:string): Promise<void>{
        await this.clearAndType(`//div[text()=' Step 2 - Delivery Address ']/following::input[@placeholder='Email address']`,`Delivery Email Address`,deliveryEmail)
        
    }

    async clickingResidential(residentialCollection: string,residentialDelivery: string): Promise<void>{
        if (residentialCollection == "Yes") {
            await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/preceding::mat-checkbox[@formcontrolname='Residential']`,`Residential Collection`,`Check Box`)
        }
        else if (residentialDelivery == "Yes") {
            await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/following::mat-checkbox[@formcontrolname='Residential']`,`Residential Delivery`,`Check Box`) 
        }
    }

    async clickingPOBoxDelivery(poBoxDelivery: string): Promise<void>{
        if (poBoxDelivery == "Yes") {
            await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/following::mat-checkbox[@formcontrolname='POBoxDelivery']`,`PO Box Delivery`,`Check Box`)  
        }
    }

    async clickingATL(atl: string,atlDescription: string): Promise<void>{
        if(atl== "Yes"){
            await this.clickButton(`//mat-checkbox[@formcontrolname='ATLCheckbox']`,`ATL`,`CheckBox`)
            await this.clearAndType(`//input[@placeholder='ATL Description']`,`ATL Description`,atlDescription)
        }
    }

    async clickingDangerousGoods(dangerousGoods: string,uNN : number,dgPackageType: string,dgPackageGroup: string,technicalName: string,classDivision: number): Promise<void>{
        if (dangerousGoods== "Yes") {
            await this.clickButton(`//mat-checkbox[@formcontrolname='IsDangerousGoods']`,`Dangerous Goods`,`Check Box`)
            await this.clearAndType2(`//input[@formcontrolname='UNNumber']`,`UNN Number`,uNN)
            await this.clickButton(`//mat-select[@formcontrolname='dgPackageType']`,`DG Package Type`,`Drop Down`)
            await this.clickButton(`//span[text()=${dgPackageType}]`,`DG Package Type`,`Button`)
            await this.clickButton(`//mat-select[@formcontrolname='dgPackageGroup']`,`DG Package Type`,`Drop Down`)
            await this.clickButton(`//span[text()=${dgPackageGroup}]`,`DG Package Type`,`Button`)
            await this.clearAndType(`//input[@formcontrolname='TechnicalName']`,`Technical Name`,technicalName)
            await this.clearAndType2(`//input[@formcontrolname='ClassDivision']`,`Class Division`,classDivision)  
        }
    }

    async clickingTailGate(tailGateCollection: string,tailGateDelivery: string): Promise<void>{
        if (tailGateCollection=="Yes") {
            await this.clickButton(`//mat-checkbox[@formcontrolname='LiftGateRequiredForPickUp']`,`Tail Gate Collection`,`Check Box`)   
        }
        else if(tailGateDelivery=="Yes"){
            await this.clickButton(`//mat-checkbox[@formcontrolname='LiftGateRequired']`,`Tail Gate Delivery`,`Check Box`)
        }
    }

    async clickingHandUnload(handUnload: string): Promise<void>{
        if (handUnload== "Yes") {
            await this.clickButton(`//mat-checkbox[@formcontrolname='HandUnloadRequired']`,`Hand Unload`,`Check Box`)   
        }
    }

    async clickingExhibitionDelivery(exhibitionDelivery: string): Promise<void>{
        if (exhibitionDelivery== "Yes") {
            await this.clickButton(`//mat-checkbox[@formcontrolname='ExhibitionDeliveryRequired']`,`Exhibition Delivery`,`Check Box`)   
        }
    }

    async clickingMineSite(mineSite: string): Promise<void>{
        if (mineSite== "Yes") {
            await this.clickButton(`//mat-checkbox[@formcontrolname='MineSiteRequired']`,`Mine Site`,`Check Box`)   
        }
    }

    async clickingTimeSlot(timeSlot: string, deliveryDate: string, deliveryTime: string): Promise<void>{
        if (timeSlot== "Yes") {
            await this.clickButton(`//mat-checkbox[@formcontrolname='TimeSlotRequired']`,`TimeSlot`,`Check Box`)
            await this.clickButton(`//button[@aria-label='Open calendar']`,`Calendar`,`Icon`)
            await this.clickButton(`//div[text()='${deliveryDate}']`,`Delivery Date`,deliveryDate)
            await this.clickButton(`//mat-select[@formcontrolname='TimeSlotTime']`,`Delivery Time`,`Drop Down`)
            await this.clickButton(`//span[text()='${deliveryTime}']`,`Delivery time`,`Button`)
        }
    }

    async clickingfedEXSignature(fedEXISR: string,fedEXDSR: string,fedEXASR: string): Promise<void>{
        if (fedEXISR == "Yes") {
            await this.clickButton(`//mat-checkbox[@formcontrolname='InDirectSignatureRequired']`,`fedEXISR`,`Check Box`)
        }
        else if(fedEXDSR == "Yes"){
            await this.clickButton(`//mat-checkbox[@formcontrolname='DirectSignatureRequired']`,`fedEXDSR`,`Check Box`)
        }
        else if(fedEXASR == "Yes"){
            await this.clickButton(`//mat-checkbox[@formcontrolname='AdultSignatureRequired']`,`fedEXASR`,`Check Box`)
        }
    }

    async clickingServiceCompany(carrierName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[1]`,`Service Company`,`Drop Down`)
        await this.locatorChainingClick(`Service Company Drop Down`,carrierName,`span`)
    }

    async clickingServiceType(serviceTypeName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[2]`,`Service Type`,`Drop Down`)
        await this.locatorChainingClick(`Service Type Drop Down`,serviceTypeName,`span`)
    }

    async clickingPackageType(packageTypeName:string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select one'])[3]`,`Package Type`,`Drop Down`)
        await this.locatorChainingClick(`Package Type Drop Down`,packageTypeName,`span`)
    }

    async enteringCustomerRef(customerRef: string): Promise<void>{
        await this.clearAndType(`//input[@formcontrolname ='CustomerReference']`,`Customer Reference`,customerRef)
        
    }

    async enteringTestDescription(description: string): Promise<void>{
        await this.clearAndType(`//textarea[@formcontrolname='Description']`,`Test Description`,description)
    
    }

    async choosingOriginCountry(originCountry: string): Promise<void>{
        await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/following::mat-select[@placeholder='Select country'][2]`,`Country Of Origin`,`DropDown`)
        await this.clickButton(`(//span[text()='${originCountry}'])[2]`,`Australia`,`Button`)
    }

    async clickingTransitInsurance(insurance: string): Promise<void>{
        await this.locatorWithFilter(`.mat-radio-label-content`,`Transit Insurance`,insurance,`RadioButton`)
    }

    async enteringWeight(unit: number): Promise<void>{
        await this.clearAndType2(`//input[@placeholder='Unit']`,`Weight`,unit)

    }

    async enteringLength(lengthCM: string): Promise<void>{
        await this.clearAndType(`//input[@placeholder='L']`,`Length`,lengthCM)
    
    }

    async enteringWidth(widthCM: string): Promise<void>{
        await this.clearAndType(`//input[@placeholder='W']`,`Width`,widthCM)
        
    }

    async enteringHeight(heightCM:string): Promise<void>{
        await this.clearAndType(`//input[@placeholder='H']`,`Height`,heightCM)
        
    }

    async enteringCustomValue(customValue: number): Promise<void>{
        await this.clearAndType2(`(//input[@placeholder='Value'])[1]`,`Custom Value`,customValue)

    }

    async choosingCurrencyType(currency: string): Promise<void>{
        await this.clickButton(`//mat-select[@formcontrolname='Currency']`,`Currency`,`Button`)
        await this.clickButton(`(//span[text()='${currency}'])[1]`,`Currency`,`button`)
    }

    async clickingQuoteButton(): Promise<void>{
        await this.clickButton(`//button[text()='Quote']`,`Quote`,`Button`)
    }

    async exportPageSpinner(): Promise<void>{
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

    async ancillaryChargesValidation(remoteAreaCharge: string): Promise<void> {

    const remoteAreaFee = await this.getInnerText(`//li[strong[contains(text(),' Remote Area Sur. ')]]`);
    const quotePopup = await this.locatingPopup(`#quoteDialog`);
    const exception = await this.locatingPopup(`.cdk-overlay-pane`);

    if (remoteAreaFee == remoteAreaCharge) {
        console.log(`The Remote Area Surcharge we are getting as per the Requirement!!! Expected ${remoteAreaCharge} and the result ${remoteAreaFee}`);                    
        await this.getQuoteMessage(`.service-wrapper`);
    } else {
        throw new Error(`Remote Area Surcharge Mismatch! Expected ${remoteAreaCharge} but found ${remoteAreaFee}`);
    }

    /* if you want, you can uncomment and handle error popups here */
    // else if(exception) {
    //     await this.getErrorMessage(`.cdk-overlay-pane`);
    // } else {
    //     await this.getErrorMessage(`#toast-container`);
    // }
    }

    async tailGateChargesValidation(tailGateCollectionCharge: string,tailGateDeliveryCharge: string): Promise<void> {
        const tailLiftCollection = await this.locatingElement(`//li[strong[contains(text(),'TailGate Collection Surcharge:')]]`)
        const tailLiftDelivery = await this.locatingElement(`//li[strong[contains(text(),'TailGate Delivery Surcharge:')]]`)

        if(tailLiftCollection && tailLiftDelivery){
            const tailGateCollectionFee = await this.getInnerText(`//li[strong[contains(text(),'TailGate Collection Surcharge:')]]`);
            const tailGateDeliveryFee = await this.getInnerText(`//li[strong[contains(text(),'TailGate Delivery Surcharge:')]]`)
            if (tailGateCollectionFee === tailGateCollectionCharge && tailGateDeliveryFee === tailGateDeliveryCharge) {
            console.log(`The TailGate Collection Surcharge we are getting as per the Requirement!!! Expected ${tailGateCollectionCharge} and the result ${tailGateCollectionFee}`);                    
            await this.getQuoteMessage(`.service-wrapper`);
            console.log(`The TailGate Delivery Surcharge we are getting as per the Requirement!!! Expected ${tailGateDeliveryCharge} and the result ${tailGateDeliveryFee}`);                    
            await this.getQuoteMessage(`.service-wrapper`);   
           }
           else{
               throw new Error(`TailGate Surcharge Mismatch! Expected [${tailGateCollectionCharge}, ${tailGateDeliveryCharge}] but found [${tailGateCollectionFee}, ${tailGateDeliveryFee}]`);    
        }
        }
        else if (tailLiftCollection) {
            const tailGateCollectionFee = await this.getInnerText(`//li[strong[contains(text(),'TailGate Collection Surcharge:')]]`);
            if (tailGateCollectionFee === tailGateCollectionCharge) {
            console.log(`The TailGate Collection Surcharge we are getting as per the Requirement!!! Expected ${tailGateCollectionCharge} and the result ${tailGateCollectionFee}`);                    
            await this.getQuoteMessage(`.service-wrapper`);  
           }
           else{
               throw new Error(`TailGate Collection Surcharge Mismatch! Expected ${tailGateCollectionCharge} but found ${tailGateCollectionFee}`);
           }
        }
        else if(tailLiftDelivery) {
            const tailGateDeliveryFee = await this.getInnerText(`//li[strong[contains(text(),'TailGate Delivery Surcharge:')]]`)
           if (tailGateDeliveryFee === tailGateDeliveryCharge) {
            console.log(`The TailGate Delivery Surcharge we are getting as per the Requirement!!! Expected ${tailGateDeliveryCharge} and the result ${tailGateDeliveryFee}`);                    
            await this.getQuoteMessage(`.service-wrapper`); 
           }
           else{
               throw new Error(`TailGate Delivery Surcharge Mismatch! Expected ${tailGateDeliveryCharge} but found ${tailGateDeliveryFee}`);
           }
       }
       else {
        throw new Error('TailGate surcharges not found on the page.');
       }
    }

    async gettingRatesOrErrorMessage(): Promise<void>{
        try {
            const quotePopup = await this.locatingPopup(`#quoteDialog`)
            const exception = await this.locatingPopup(`.cdk-overlay-pane`)
            if(quotePopup)
            {
                await this.getQuoteMessage(`.service-wrapper`)   
            }
            else if(exception)
            {
                await this.getErrorMessage(`.cdk-overlay-pane`)
            }
            else
            {
                await this.getErrorMessage(`#toast-container`) 
            }

        } catch (error) {
            console.error(`The error received while getting rates ${error}`)    
        }

    }

    async getCourierRatesORErrorMessage(errorMessage: string): Promise<void>{

        
            const quotePopup = await this.locatingPopup(`#quoteDialog`)
            if(quotePopup)
            {
                await this.getQuoteMessage(`.service-wrapper`)   
            }
            else
            {
                const errorPopup = await this.getInnerText(`#toast-container`)
                expect(errorPopup,`we are getting expected error Message that is : ${errorPopup}`).toContain(errorMessage)
                console.log(`Error message we received : ${errorPopup}`);
                
            }
    }

    async gettingMHFee(): Promise<void>{
        try {
            const manualHandling = await this.locatingPopup(`//strong[text()='Manual Handling Surcharge:']`)
            const manualOversize = await this.locatingPopup(`//strong[text()='ManualHand.-OvermaxSize Sur.:']`)
            if(manualHandling)
            {
                console.log(`Manual Handling fee is visible`)
                await this.getQuoteMessage(`.service-wrapper`)    
            } 
            else if(manualOversize)
            {
                console.log(`Manual Handling Oversize fee is visible`)
                await this.getQuoteMessage(`.service-wrapper`)   
            }
            else if(!manualHandling && !manualOversize)
            {
                await this.getQuoteMessage(`.service-wrapper`)
            }
            
        } catch (error) {
            await this.getErrorMessage(`#toast-container`)
            console.error(`The error received while getting rates ${error}`)
            
        }

    }

    async validatingMHFeeST(manualHandlingFee: string): Promise<void>{
        const addtionalHandling = await this.locatingPopup(`//li[strong[contains(text(),'Add. Handling Charge:')]]`)

        if (addtionalHandling) {
            const addtionalHandlingFee = await this.getInnerText(`//li[strong[contains(text(),'Add. Handling Charge:')]]`)
            if (manualHandlingFee === addtionalHandlingFee) {
                console.log(`Manual handling or Additional handling fee is getting charged`);
                console.log(`The Manual Handling Fee we are getting as per the Requirement!!! Expected ${manualHandlingFee} and the result ${addtionalHandling}`);
                await this.getQuoteMessage(`.service-wrapper`)    
            }     
        }
        else
        {
            throw new Error(`Manual handling fee not found. Manual Handling Fee Mismatch! Expected ${manualHandlingFee} but found ${addtionalHandling}`);
        }
    }

    async validatingOversizeFeeST(oversizeCharges: string,manualHandlingFee: string): Promise<void>{
        const addtionalHandling = await this.locatingPopup(`//li[strong[contains(text(),'Add. Handling Charge:')]]`)
        const overSizeFee = await this.locatingPopup(`//li[strong[contains(text(),'Over Size Charge:')]]`)

        
        if (addtionalHandling) {
            const addtionalHandlingFee = await this.getInnerText(`//li[strong[contains(text(),'Add. Handling Charge:')]]`)
            if (manualHandlingFee === addtionalHandlingFee) {
                console.log(`Manual handling or Additional handling fee is getting charged`);
                console.log(`The Manual Handling Fee we are getting as per the Requirement!!! Expected ${manualHandlingFee} and the result ${addtionalHandlingFee}`);
                await this.getQuoteMessage(`.service-wrapper`)    
            }     
        }
        else if (overSizeFee) {
            const oversizeMHFee = await this.getInnerText(`//li[strong[contains(text(),'Over Size Charge:')]]`)
            if (oversizeCharges === oversizeMHFee) {
                console.log(`Over Size Fee is getting charged`);
                console.log(`The Oversize Fee we are getting as per the Requirement!!! Expected ${oversizeCharges} and the result ${oversizeMHFee}`);
                await this.getQuoteMessage(`.service-wrapper`)
            }  
        }
        else {
            throw new Error(`Oversize fee not found. Oversize Fee Mismatch! Expected ${oversizeCharges} but found ${overSizeFee}`);
        }
    }

    async chooseMultipleItems(value: string): Promise<void>{

        if (value>"1") 
        {
            await this.clickButton(`//mat-select[@formcontrolname='packageCount']`,`No of Items`,`Drop Down`)
            await this.locatorChainingClick(`No of Items Drop Down`,value,`span`)
            await this.clickButton(`//span[@class='icon-upload-file ng-star-inserted']`,`Copy to All`,`Icon`)
            
        }
        
    }

    async clickingCopytoAllIcon(): Promise<void>{
        await this.clickButton(`//span[@class='icon-upload-file ng-star-inserted']`,`Copy to All`,`Icon`)
    }

    async clickingOKButton(): Promise<void>{
        await this.clickButton(`//span[text()='Ok']`,`Ok`,`Button`)
    }

    async clickingResetButton(): Promise<void>{
        await this.clickButton(`(//button[text()='Reset'])[1]`,`Reset`,`Button`)

    }

    async clickingNextButton(): Promise<void>{
        await this.clickButton(`(//button[text()='Next'])[1]`,`Next Button`,`Button`)
        const tntPopup = await this.locatingPopup(`.cdk-overlay-pane`)
        if (tntPopup) {
            await this.clickButton(`//button[text()='OK']`,`OK`,`Button`)    
        }
    }
    

}