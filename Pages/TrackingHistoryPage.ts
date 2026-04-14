import { Page,BrowserContext, expect } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";

export class TrackingHistoryPage extends PlaywrightWrapper{

    constructor(page: Page, context: BrowserContext){
        super(page,context)
    }

    async filteringConsingment(filterBy : string, filterByValue: string): Promise<void>{
        try {
            await this.clickButton(`//mat-select[@placeholder='Search By']`,`Select By`,`Drop Down`)
            await this.locatorChainingClick(`Select By Drop Down`,filterBy,`span`)
            await this.type(`//input[@formcontrolname='SearchValue']`,`Search Value Field`,filterByValue)
            await this.clickButton(`.icon-search-icon-30`,`Search`,`Icon`)
            
        } catch (error) {
            console.error(`The Error message we are getting when filtering consingment is ${error}`)
            
        }
        
    }

    async clickingRow(text : string): Promise<void>{
        try {
            await this.clickButton(`//li[text()=' ${text} ']`,`Consignment Row Group`,`Button`)
            
        } catch (error) {
            console.error(`The Error message we are getting when clicking Row is ${error}`)
            
        }
        
    }

    async clickingTrackingAndPOD(): Promise<void>{
        try {
            await this.clickButton(`//button[text()=' Tracking & POD ']`,`Tracking & POD`,`Button`)
            await this.spin("//div[@class='la-ball-beat la-2x']")
            const collecting = await this.locatingElement(`#btnCollection`)
            if (collecting) {
                console.log(`Tracking & POD functionality is working fine :-))!!`);
                await this.clickButton(`.icon-wo_cross`,`Tracking & POD close`,`Cross`) 
                
            } else {
                await this.getErrorMessage(`#toast-container`)
                
            }
            
        } catch (error) {
            console.error(`The Error message we are getting when clicking Tracking and POD is ${error}`)
            
        }
        
    }

    async clickShippingDocument(labelurlContains: string[], receipturlContains: string, manifesturlContains: string, mailTo: string,starTrackManifestUrl: string,filterBy : string,commercialInvoiceUrl: string[],commercialInvoiceLogoUrl: string[]): Promise<void>{
        try {
            const allied = await this.locatingElement(`//li[text()=' ALLIED EXPRESS ']`)
            const starTrack = await this.locatingElement(`//li[text()=' STARTRACK ']`)
            const fedEx = await this.locatingElement(`//li[text()=' FEDEX ']`)
            const ups = await this.locatingElement(`//li[text()=' UPS ']`)

            if(allied) 
            {
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.mouseHover(`//button[text()='View Label']`)
                await this.handlingLabels(`//button[text()='View Paper Label']`,`Tracking History View Label`,labelurlContains)
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.mouseHover(`//button[text()='View Label']`)
                await this.handlingLabels(`//button[text()='Print Thermal Label']`,`Tracking History Print Thermal Label`,labelurlContains) // Print label also created as PDF file
                console.log(`Tracking History Thermal Label has been generated successfully :-)!!`);
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingNewPages(`//button[text()='Receipt']`,`Tracking History Receipt`,receipturlContains)
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingNewPages(`//button[text()=' Manifest ']`,`Tracking History Manifest`,manifesturlContains)    
            }
            else if(starTrack)
            {
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingLabels(`//button[text()='View Label']`,`Tracking History View Label`, labelurlContains)
                await this.clickButton(`//p[text()='Print']`,`Print`,`Button`)
                await this.clickButton(`//a[text()='Print Manifest']`,`Print Manifest`,`Button`)
                await this.clickButton(`//li[text()=' Startrack ']`,`Star Track`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.clickButton(`//li[text()=' ${labelurlContains} ']/preceding::div[6]`,`Shipment`,`Check box`)
                await this.handlingNewPages(`//button[text()=' Generate Manifest ']`,`Manifest`,starTrackManifestUrl)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.clickButton(`//p[text()='Track']`,`Track`,`Button`)
                await this.clickButton(`//a[text()='Tracking History']`,`Tracking History`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.clickButton(`//mat-select[@placeholder='Search By']`,`Select By`,`Drop Down`)
                await this.locatorChainingClick(`Select By Drop Down`,filterBy,`span`)
                for(const url of labelurlContains){
                    await this.type(`//input[@formcontrolname='SearchValue']`,`Search Value Field`,url)
                }
                await this.clickButton(`.icon-search-icon-30`,`Search`,`Icon`)
                await this.clickButton(`//li[text()=' ${labelurlContains} ']`,`Consignment Row Group`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingNewPages(`//button[text()=' Manifest ']`,`Tracking History Manifest`,manifesturlContains)
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingNewPages(`//button[text()='Receipt']`,`Tracking History Receipt`,receipturlContains)
            }
            else if(fedEx || ups)
            {
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                //const commercialInvoice = await this.locatingElement(`//button[text()=' Commercial Invoice ']`)    
                await this.handlingLabels(`//button[text()='View Label']`,`Tracking History View Label`,labelurlContains)
                try {
                    await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                    await this.mouseHover(`//button[text()=' Commercial Invoice ']`)
                    await this.handlingLabels(`//button[text()='Commercial Invoice']`,`Tracking History Commercial Invoice`,commercialInvoiceUrl)
                    await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                    await this.mouseHover(`//button[text()=' Commercial Invoice ']`)
                    await this.handlingLabels(`//button[text()='Commercial Invoice With Logo']`,`Tracking History Commercial Invoice with logo`,commercialInvoiceLogoUrl)
                    
                } catch (error) {
                    console.error(`The Error message we are getting ${error}`)
                    
                }
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingNewPages(`//button[text()='Receipt']`,`Tracking History Receipt`,receipturlContains)
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingNewPages(`//button[text()=' Manifest ']`,`Tracking History Manifest`,manifesturlContains)
            }
            else 
            {
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingLabels(`//button[text()='View Label']`,`Tracking History View Label`,labelurlContains)
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingNewPages(`//button[text()='Receipt']`,`Tracking History Receipt`,receipturlContains)
                await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
                await this.handlingNewPages(`//button[text()=' Manifest ']`,`Tracking History Manifest`,manifesturlContains)
            }
            await this.clickButton(`//button[text()=' SHIPMENT DOCUMENTS ']`,`Shipping Document`,`Drop Down`)
            await this.clickButton(`//button[text()=' Send Documents ']`,`Send Document`,`Button`)
            await this.type(`//input[@formcontrolname='MailTo']`,`Email Address`,mailTo)
            await this.clickButton(`//button[text()='Send']`,`Send`,`Button`)
            await this.spin("//div[@class='la-ball-beat la-2x']")
            await this.getErrorMessage(`#toast-container`)
            
        } catch (error) {
            console.error(`The Error message we are getting when clicking Shipping Document Dropdown is ${error}`) 
        }
        
    }


    async trackingHistoryPageSpinner(): Promise<void>{
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

    async clickingVoidButton(): Promise<void>{
        await this.clickButton(`//button[text()=' Void ']`,`Void`,`Button`)
        await this.clickButton(`//button[text()='Yes']`,`Yes`,`Button`)
        console.log(`The shipment has been successfully voided :-))!!`); 
        await this.spin("//div[@class='la-ball-beat la-2x']")
        await this.getErrorMessage(`#toast-container`)

    }

}