import { test } from '@src/fixtures/CustomFixtures';
import { Env } from '@src/utils/Env';
import { HomePage } from '../../pages/orangehrm/HomePage';
import { AddEmployee } from '../../pages/orangehrm/AddEmployee';
import { getRandomEmployeeDetails } from '../../testdata/random';


test('Add Employee21', async ({ page, loginPage }) => {
  await page.goto(Env.BASE_URL);
  await loginPage.loginToApplication(Env.USERNAME, Env.PASSWORD);

  const homePage = new HomePage(page);

  await homePage.getSideMenuComponent().selectSideMenuComponent("PIM");
  await homePage.getTopMenuComponent().selectTopMenuComponent("Add Employee");

  const employeePage = new AddEmployee(page);
  await employeePage.addEmployeeDetails(getRandomEmployeeDetails());


});