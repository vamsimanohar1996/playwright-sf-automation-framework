import {Page, type Locator} from '@playwright/test'

export class LoginPage {
    private readonly usernameInputbox: Locator;
    private readonly passwordInputbox: Locator;
    private readonly loginButton: Locator;
    private readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
  
      this.usernameInputbox = this.page.getByRole('textbox', { name: 'Username' });
      this.passwordInputbox = this.page.getByRole('textbox', { name: 'Password' });
      this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }
  
    async loginToApplication(username: string, password: string) {
      await this.usernameInputbox.fill(username);
      await this.passwordInputbox.fill(password);
      await this.loginButton.click();
    }
  }