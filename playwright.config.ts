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
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'],['github']],
  timeout: 60000,

  use: {
    trace: 'on-first-retry',
    screenshot:'only-on-failure',
    video:'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      
  
      use: { ...devices['Desktop Chrome'] 
        
      },
      
    },

  ],
});
