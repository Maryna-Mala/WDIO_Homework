import { Given, When, Then } from '@cucumber/cucumber';
import { homePage } from '../../../src/pom/pages/home.page.js';
import { settingsPage } from '../../../src/pom/pages/settings.page.js';


Given('I am logged in with valid credentials', async function () {
    await browser.LogInWithValidCredentials()
  });

  When('I am at my profile page "Profile and visibility" tab', async function () {
    await homePage.header.accountInfoButton()
    await homePage.sideMenu.accountAndVisibility()
  });

  When('I edit the bio in my profile name', async function () {
    await settingsPage.pesonalInfo.bioSetValue()
  });
  
  Then('the bio should be updated', async function () {
    await settingsPage.pesonalInfo.saveButton()
});


