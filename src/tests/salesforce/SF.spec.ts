import { SFLoginPage } from '@src/pages/salesforce/SFLoginPage';
import {test,expect} from '@playwright/test';
import {Env} from '@src/utils/Env'
import { SalesforceHomePage } from '@src/pages/salesforce/SalesforceHomePage';
import { LeadsPage } from '@src/pages/salesforce/LeadsPage';
import logger from '@src/utils/Logger';


test(`Login to SF and create a new lead`,
    
    {
        tag: `@SF_Smoke`,
        annotation:{
            type:'Critical',
            description: 'Checking leads creation'
        }
    },
    
    
    async({page})=>
    {

   
    const sfLoginPage = new SFLoginPage(page);
    await sfLoginPage.visitSF();
    await sfLoginPage.loginToSFApp(Env.SF_USERNAME,Env.SF_PASSWORD);
    logger.info(`Logged into the Salesforce Applications`)

    const sfHomePage = new SalesforceHomePage(page);
    await sfHomePage.selectSalesforceObject("Ledfads");

    const leadsPage = new LeadsPage(page);
    await expect(page.locator(leadsPage.getLeadsPageLocator()).last()).not.toBeVisible();

    await page.waitForTimeout(5000);
    
});

