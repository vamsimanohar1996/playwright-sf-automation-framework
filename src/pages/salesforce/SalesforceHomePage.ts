import {Page, type Locator} from '@playwright/test'
import { LeadsPage } from './LeadsPage';
import logger from '@src/utils/Logger';
export class SalesforceHomePage{

    constructor(private readonly page:Page){};

    private readonly tab = (tabName:string) : Locator => this.page.getByRole('link', { name: tabName }); 

    
    async selectSalesforceObject(component:string){

        await this.tab(component).click()
        .catch((error)=>{
            logger.error(`error clicking the  ${component} object and the error : ${error}`)
            throw error;
        })
       

        
    }
 

}