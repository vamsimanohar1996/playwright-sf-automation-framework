import {Page, type Locator} from '@playwright/test'

export class LeadsPage
{

    public  readonly pageTitle : string
    private readonly page:Page
    private readonly newButton:Locator

    constructor(page:Page){
       this.page=page;
       this.pageTitle = `//span[.="Leads"]`;
       this.newButton = this.page.getByRole('button',{name:"New"})

    }

    getLeadsPageLocator()
    {
         return this.pageTitle;
    }


    
    async enterLeadInformation(data:any){



    }

}