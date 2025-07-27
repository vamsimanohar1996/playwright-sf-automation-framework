import { APIRequestContext } from '@playwright/test';

export class ApiUtils {
  public authToken: string = "";

  public async createAuthToken(api: APIRequestContext): Promise<string> {
    const authResponse = await api.post("https://restful-booker.herokuapp.com/auth", {
      data: {
        username: "admin",
        password: "password123"
      }
    });

    const response = await authResponse.json();
    const tokenId = response.token;
    this.authToken = tokenId;
    return this.authToken;
  }
}
