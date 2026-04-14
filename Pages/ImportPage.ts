import { Page,BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";
import { UrlConstants } from "../Constants/urlConstants";

export class ImportPage extends PlaywrightWrapper{
    
    static preliveImportPageUrl = UrlConstants.preliveImportPageUrl

    constructor(page:Page,context: BrowserContext){
        super(page,context)

    }

    async clickingImportPage(): Promise<void>{
        await this.clickButton(`//img[@title='Ship']`,`Ship`,`Button`)
        await this.clickButton(`//a[text()='Import']`,`Import`,`Button`)

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

    async clickingCollectionState(collectionState: string,collectionCountry: string): Promise<void>{
        try {
            
            if (collectionCountry=== "USA" || collectionCountry=== "AUSTRALIA") {
               await this.clickButton(`//div[text()=' Step 2 - Delivery Address ']/preceding::mat-select[@placeholder='Select state']`,`Collection State`,`Drop Down`)
               await this.locatorChainingClick(`Collection State`,collectionState,`span`)   
            }
            
        } catch (error) {
            console.log(`The Error we are getting ${error}`);  
        }   
    }

    async clickingDeliveryState(deliveryState:string,deliveryCountry:string): Promise<void>{
        try {   

            if (deliveryCountry=== "USA" || deliveryCountry=== "AUSTRALIA") {
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

    async clickingServiceCompany(carrierName:string): Promise<void>{
        await this.clickButton(`//mat-select[@formcontrolname='Service']`,`Service Company`,`Drop Down`)
        await this.locatorChainingClick(`Service Company Drop Down`,carrierName,`span`)
    }

    async clickingServiceType(serviceTypeName:string): Promise<void>{
        await this.clickButton(`//mat-select[@formcontrolname='ServiceType']`,`Service Type`,`Drop Down`)
        await this.locatorChainingClick(`Service Type Drop Down`,serviceTypeName,`span`)
    }

    async clickingLabelDeliveryMethod(printReturnLabel: string): Promise<void>{

        if (printReturnLabel == "Yes") {
            await this.clickButton(`//mat-select[@placeholder='Print Return Label']`,`Print Return Label`,`Drop Down`)
            await this.clickButton(`//span[text()='Print Return Label']`,`Print Return Label`,`Button`)  
        }
    }

    async clickingPackageType(packageTypeName:string): Promise<void>{
        await this.clickButton(`//mat-select[@formcontrolname='Package']`,`Package Type`,`Drop Down`)
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

    async clickingMultiplePieces(count: number): Promise<void>{

        if (count>1) {
            for(let i =1; i<count;i++){
                await this.clickButton(`//button[text()='Add another unit ']`,`Add Unit`,`Button`)
    
            }
            await this.clickButton(`//span[@title='Copy To All']`,`Copy To All`,`Icon`)   
        }  

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
        await this.clearAndType2(`//input[@placeholder='Value']`,`Custom Value`,customValue)

    }

    async choosingCurrencyType(currency: string): Promise<void>{
        await this.clickButton(`//mat-select[@formcontrolname='Currency']`,`Currency`,`Button`)
        await this.clickButton(`(//span[text()='${currency}'])[1]`,`Currency`,`button`)
    }

    async clickingQuoteButton(): Promise<void>{
        await this.clickButton(`//button[text()='Quote']`,`Quote`,`Button`)
    }

    async importPageSpinner(): Promise<void>{
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