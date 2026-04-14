import { Page,BrowserContext } from "@playwright/test";
import { PlaywrightWrapper } from "../Utils/playwright";

export class ShipManagerPage extends PlaywrightWrapper{
    constructor(page:Page,context:BrowserContext){
        super(page,context)
    }

    async clickingShipManager(): Promise<void>{
        await this.clickButton(`//p[text()='Ship']`,`Ship`,`Button`)
        await this.clickButton(`//a[text()='Ship Manager']`,`Ship Manager`,`Button`)
    }

    async shipManagerSpinner(): Promise<void>{
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

    async shipManagerProcessingNotification(): Promise<void>{
        await this.processingNotification(`//span[@class='refresh-notification__container']`)
    }

    async deleteAllRecords(): Promise<void>{
        await this.clickButton(`//button[text()=' MORE']`,`More`,`DropDown`)
        await this.clickButton(`//button[text()='Delete All']`,`Delete All`,`Button`)
        await this.clickButton(`//button[text()='Yes']`,`Yes`,`Button`)
        await this.spin("//div[@class='la-ball-beat la-2x']")
    }

    async uploadCSVFile(template: string): Promise<void>{
        await this.clickButton(`//button[text()=' Upload CSV ']`,`Upload CSV`,`Button`)
        await this.clickButton(`//mat-select[@placeholder='Select File Type']`,`Select File Type`,`DropDown`)
        await this.clickButton(`//span[normalize-space(text()) = "${template}"]`,`${template}`,`File Name`)
        //await this.clickButton(`//button[text()='Select file']`,`Select File`,`Button`)
        await this.uploadFile(`input[type='file']`,`Uploads/ShipManagerData.csv`)
        await this.clickButton(`//button[text()='Upload File']`,`Upload File`,`Button`)
        await this.spin("//div[@class='la-ball-beat la-2x']")
        await this.page.waitForTimeout(3000)
    }

    async quoteDifferentServices(serviceName: string,numberOfRecords: number, carrier: string): Promise<void>{   //In the method we can quote different types of services eg: fastest, cheapest or specific carrier                        

        if (serviceName == "Fastest") {   //Validating condition if it is fastest
            await this.clickButton(`//button[text()=' QUOTE']`,`Quote`,`DropDown`)  //Clicking quote drop down button
            await this.clickButton(`//button[text()='Fastest Service']`,`Fastest Service`,`Button`)  //Clicking fastest service button  
            await this.spin("//div[@class='la-ball-beat la-2x']") //wait for the spinner to end
            await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
            for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
            }
        }
        else if (serviceName == "Cheapest"){ //Validating condition if it is cheapest
            await this.clickButton(`//button[text()=' QUOTE']`,`Quote`,`DropDown`)  //Clicking quote drop down button
            await this.clickButton(`//button[text()='Cheapest Service']`,`Cheapest Service`,`Button`)  //Clicking cheapest service button 
            await this.spin("//div[@class='la-ball-beat la-2x']") //wait for the spinner to end
            await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
            for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
            }

        }
        else if(serviceName == "Specific Carrier"){
            await this.clickButton(`//button[text()=' QUOTE']`,`Quote`,`DropDown`)
            await this.mouseHover(`//button[text()='Specific Carrier']`)

            if (carrier == "Allied Express") {
                await this.clickButton(`//button[text()='Allied Express']`,`Allied Express`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "Border Express"){
                await this.clickButton(`//button[text()='Border Express']`,`Border Express`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "Couriers Please"){
                await this.clickButton(`//button[text()='Couriers Please']`,`Courier Please`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "fedEX"){
                await this.clickButton(`//button[text()='FEDEX'][1]`,`fedEX`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "Toll Intermodal"){
                await this.clickButton(`//button[text()='Intermodal & Specialised']`,`Toll Intermodal`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`)
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                //const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                const rates = await this.getInnerText(`//span[@class='price font-montserrat'][${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "Toll IPEC"){
                await this.clickButton(`//button[text()='IPEC']`,`Toll IPEC`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "Toll Priority"){
                await this.clickButton(`//button[text()='Priority (Aus)']`,`Toll Priority`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "Startrack"){
                await this.clickButton(`//button[text()='StarTrack']`,`Startrack`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "TNT"){
                await this.clickButton(`//button[text()='TNT']`,`TNT`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "UPS"){
                await this.clickButton(`//button[text()='UPS']`,`UPS`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }
            else if(carrier == "Machship"){
                await this.clickButton(`//button[text()='World Options Australia']`,`World Options Australia`,`Button`)
                await this.spin("//div[@class='la-ball-beat la-2x']")
                await this.processingNotification(`//span[@class='refresh-notification__container']`) //wait for the processing button to end
                for (let i = 1; i <= numberOfRecords; i++) {   // intializing i varible with value of integer 1, i less than number of records means control comes to the body of the loop and execute
                const rates = await this.getInnerText(`(//div[@class='get-quote-wrapper get-quote-wrapper-border mat-menu-trigger ng-star-inserted'])[${i}]`) //Getting rates and store it in the rates variable
                console.log(`The carriers rates for the record ${i} : ${rates}`);  //Printing the rates in the console
                }
            }

        }
        

    }

    async clickingShipManagerShip(): Promise<void>{
        await this.clickButton(`//button[text()='Ship Mgr Ship ']`,`ShipManager Ship`,`Button`)
    }

    async shipManagerDropAtDepot(): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select'])[1]`,`Select`,`DropDown`)
        await this.clickButton(`//span[text()='Drop at a Depot']`,`DropAtDepot`,`Button`)
        await this.clickButton(`//button[text()='OK']`,`OK`,`Button`)
        await this.clickButton(`//button[text()='Ok']`,`Confirm`,`Button`)

    }

    async shipManagerScheduleACollection(date: string, parcelReadyFrom: string, LatestPickupTime: string): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select'])[1]`,`Collection Option`,`DropDown`)
        await this.clickButton(`(//span[text()='Schedule a Collection'])[2]`,`Schedule a Collection`,`Button`)
        await this.clickButton(`//button[@aria-label='Open calendar']`,`Date Of Collection`,`Callendar Icon`)
        await this.clickButton(`//div[text()='${date}']`,`Date ${date} in the `,`Callender Icon`)
        await this.clickButton(`(//mat-select[@placeholder='Select'])[2]`,`Parcel Ready From`,`DropDown`)
        await this.clickButton(`//span[text()='${parcelReadyFrom}']`,`Parcel Ready From`,`Button`)
        await this.clickButton(`(//mat-select[@placeholder='Select'])[3]`,`Latest Pickup Time `,`DropDown`)
        await this.clickButton(`//span[text()='${LatestPickupTime}']`,`Latest Pickup Time`,`Button`)
        await this.clickButton(`//button[text()='OK']`,`OK`,`Button`)
        await this.clickButton(`//button[text()='Ok']`,`Confirm`,`Button`)

    }

    async shipManagerIAlreadyHaveCollectionScheduled(): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select'])[1]`,`Select`,`DropDown`)
        await this.clickButton(`//span[text()='I Already Have Collection Scheduled']`,`I Already Have Collection Scheduled`,`Button`)
        await this.clickButton(`//button[text()='OK']`,`OK`,`Button`)
        await this.clickButton(`//button[text()='Ok']`,`Confirm`,`Button`)
    }

    async shipManagerIHaveDailyCollection(): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select'])[1]`,`Select`,`DropDown`)
        await this.clickButton(`//span[text()='I Have Daily Collection']`,`I Have Daily Collection`,`Button`)
        await this.clickButton(`//button[text()='OK']`,`OK`,`Button`)
        await this.clickButton(`//button[text()='Ok']`,`Confirm`,`Button`)

    }

    async shipManagerFutureDateShipment(): Promise<void>{
        await this.clickButton(`(//mat-select[@placeholder='Select'])[1]`,`Select`,`DropDown`)
        await this.clickButton(`//span[text()='Future Date Shipment']`,`Future Date Shipment`,`Button`)
        await this.clickButton(`//button[text()='OK']`,`OK`,`Button`)
        await this.clickButton(`//button[text()='Ok']`,`Confirm`,`Button`)
    }

    async clickingToggleButton(): Promise<void>{
        await this.clickButton(`//label[@for='cmn-toggle-4']`,`Toggle`,`Button`)
    }

    async clickingBatchShipment(): Promise<void>{
        await this.clickButton(`//button[text()='Batch Ship']`,`Batch Ship`,`Button`)

    }

    async fillingBatchSummaryDetails(batchName: string): Promise<void>{
        await this.clearAndType(`//input[@placeholder='Enter Batch Name']`,`Batch Name`,batchName)
        await this.clickButton(`//mat-checkbox[@formcontrolname='AcceptWorldOptionsTerms']`,`Acknowledgement`,`CheckBox`)
        const batchDetail = await this.getInnerText(`//mat-dialog-content[@class= 'mat-typography dialog-body mat-dialog-content']`)
        console.log(`The Batch Summary Details: ${batchDetail}`);
        await this.clickButton(`//button[text()='Next']`,`Next`,`Button`)
    }

    async dataValidation(): Promise<void>{
        await this.clickButton(`//button[text()='START']`,`Start`,`Button`)
        await this.spin("//div[@class='la-ball-beat la-2x']")
        const batchProcessingStatus = await this.getInnerText(`//mat-dialog-container[@class='mat-dialog-container ng-tns-c28-131 ng-trigger ng-trigger-dialogContainer ng-star-inserted']`)
        console.log(`The Batch Processing Status: ${batchProcessingStatus}`);
        await this.clickButton(`//button[text()='Ok']`,`OK`,`Button`)
    }

    async numberOfPages(pages: string): Promise<void>{
        await this.clickButton(`//mat-select[@aria-label='Items per page:']`,`List Box`,`DropDown`)
        await this.clickButton(`//span[text()=${pages}]`,`Number of Pages`,`Button`)
    }
}