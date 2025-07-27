import { LoginPage } from '@src/pages/orangehrm/LoginPage'
import {test as base, Page} from '@playwright/test'
import {Env} from '@src/utils/Env'
import { HomePage } from '@src/pages/orangehrm/HomePage'
import { AddEmployee } from '@src/pages/orangehrm/AddEmployee'

interface PageFixtures {
    loginPage : LoginPage;
    homePage: HomePage;
    addEmployee: AddEmployee;
};

export const test = base.extend<PageFixtures>({
      loginPage: async ({page},use) =>{
        const loginPage = new LoginPage(page);
        await loginPage.loginToApplication(Env.USERNAME, Env.PASSWORD);
        await use(loginPage);
    },
    
        homePage: async ({page},use) =>{
            const homePage = new HomePage(page);
            await use(homePage);
    },

    addEmployee : async({page},use)=>{
        const addEmployee = new AddEmployee(page)
        await use(addEmployee);

    }

  
});

export {expect} from '@playwright/test';