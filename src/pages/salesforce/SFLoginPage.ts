import {Page, type Locator} from '@playwright/test'
import { Env } from '@src/utils/Env'

export class SFLoginPage{


    private readonly usernameInputbox: Locator
    private readonly passwordInputbox: Locator
    private readonly loginButton:Locator
    private readonly page:Page


    constructor(page:Page)
    {
           
            this.page=page;
            this.usernameInputbox = this.page.getByRole('textbox',{name:"Username"});
            this.passwordInputbox = this.page.getByRole('textbox',{name:"Password"});
            this.loginButton = this.page.getByRole('button',{name: "Log In"});
              
    }


    async visitSF()
    {
        await this.page.goto(Env.SF_BASE_URL);
    }

    async loginToSFApp(username:string,password:string)
    {


         await this.usernameInputbox.fill(username);
         await this.passwordInputbox.fill(password);
         await this.loginButton.click();

    }

}