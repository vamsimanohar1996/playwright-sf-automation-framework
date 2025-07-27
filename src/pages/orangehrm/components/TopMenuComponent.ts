import {Page, type Locator} from '@playwright/test'

export class TopMenuComponent{

    constructor(private readonly page:Page){};

    private readonly menu = (menuName:string)  => this.page.getByText(menuName); 

    
    async selectTopMenuComponent(component:string){

        await this.menu(component).click();

    }

    

    
   

}