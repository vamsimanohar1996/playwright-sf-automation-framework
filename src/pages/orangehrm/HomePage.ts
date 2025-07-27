import {Page} from '@playwright/test';
import { TopMenuComponent } from './components/TopMenuComponent';
import { SideMenuComponent } from './components/SideMenuComponent';

export class HomePage
{

     private topMenuComponent : TopMenuComponent;
        private sideMenuComponent : SideMenuComponent

     constructor(private readonly page:Page)
    {
        this.topMenuComponent = new TopMenuComponent(this.page);
        this.sideMenuComponent = new SideMenuComponent(this.page);
    }


     getTopMenuComponent()
    {
        return this.topMenuComponent;
    }

     getSideMenuComponent()
    {
        return this.sideMenuComponent;
    }
}