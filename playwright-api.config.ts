import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';

if(process.env.ENVIRONMENT)
{
  console.log(process.env.ENVIRONEMNT)
  config(
{ path: `.env.${process.env.ENVIRONMENT}`,
    override: true
  }
);
}
else{
  config();
}


export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 60000,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'web-smoke',
      use:{
        trace:'on',
        // extraHTTPHeaders:{
        //     Accept: "application/json"
        // },
    

      }
      
  
      
    },

  ],
});
