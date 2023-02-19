/* eslint-env detox/detox, mocha */

describe('Profile', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show profile', async () => {
    await element(by.id('tabProfile')).tap();
    await expect(element(by.id('profileScreen'))).toBeVisible();

    await expect(element(by.text('Abdy Malik Mulky'))).toBeVisible();
    await expect(element(by.text('abdymalikmulky@gmail.com'))).toBeVisible();

    await expect(element(by.id('profileMenuItem')).atIndex(0)).toBeVisible();
    await expect(element(by.id('profileMenuItem')).atIndex(0)).toHaveText(
      'Create an Address',
    );
    await expect(element(by.id('profileMenuItem')).atIndex(1)).toBeVisible();
  });
});
