import { test } from '@playwright/test';
import { Env } from '@src/utils/Env';
import { LoginPage } from '@src/pages/orangehrm/LoginPage';
import { HomePage } from '../../pages/orangehrm/HomePage';
import { AddEmployee } from '../../pages/orangehrm/AddEmployee';
import { getRandomEmployeeDetails } from '../../testdata/random';




test('Add Employee ', async ({ page }) => {
  await page.goto(Env.BASE_URL);
  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication(Env.USERNAME, Env.PASSWORD);

  const homePage = new HomePage(page);

  await homePage.getSideMenuComponent().selectSideMenuComponent("PIM");
  await homePage.getTopMenuComponent().selectTopMenuComponent("Add Employee");

  const employeePage = new AddEmployee(page);
  await employeePage.addEmployeeDetails(getRandomEmployeeDetails());


});

