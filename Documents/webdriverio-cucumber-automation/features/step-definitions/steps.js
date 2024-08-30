const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I am on the login page', async () => {
    await browser.url('https://example.com/login');
});

When('I enter {string} and {string}', async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
});

When('I click the login button', async () => {
    await $('#login-button').click();
});

Then('I should see the dashboard', async () => {
    await expect(browser).toHaveUrl('https://example.com/dashboard');
});


