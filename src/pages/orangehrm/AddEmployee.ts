import {Page, type Locator} from '@playwright/test'
import { EmployeeDetails } from '../../testdata/DataInterface';


export class AddEmployee {
    private readonly firstnameInputbox: Locator;
    private readonly lastnameInputbox: Locator;
    private readonly employeeidInputbox: Locator;
    private readonly saveEmployeeButton: Locator;
    private readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
      this.firstnameInputbox = page.getByRole('textbox', { name: 'First Name' });
      this.lastnameInputbox = page.getByRole('textbox', { name: 'Last Name' });
      this.employeeidInputbox = page.getByRole('textbox').nth(4);
      this.saveEmployeeButton = page.getByRole('button', { name: 'Save' });
    }
  
    async addEmployeeDetails(employeeDetails: EmployeeDetails) {
      await this.firstnameInputbox.fill(employeeDetails.firstname);
      await this.lastnameInputbox.fill(employeeDetails.lastname);
      await this.employeeidInputbox.fill(employeeDetails.employeedId);
      await this.saveEmployeeButton.click();
    }
  }
  