import {Page, type Locator} from '@playwright/test'

export class SideMenuComponent{

    constructor(private readonly page:Page){};

    private readonly menu = (menuName:string) : Locator => this.page.getByRole('link', { name: menuName }); 

    
    async selectSideMenuComponent(component:string){

        await this.menu(component).click();

    }

    

    
   

}