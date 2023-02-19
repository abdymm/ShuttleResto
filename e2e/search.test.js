/* eslint-env detox/detox, mocha */

describe('Search', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show no restaurant when user search invalid restaurant', async () => {
    // find search input element
    const searchInput = element(by.id('searchRestaurant'));

    // verify search input is visible
    await expect(searchInput).toBeVisible();

    // enter search query and trigger search
    const query = 'Sushi';
    await searchInput.typeText(query);
    await searchInput.tapReturnKey();
    await element(by.text('Search')).atIndex(0).tap();

    // verify that Restaurant screen is visible
    await expect(element(by.text('Restaurant Not Found'))).toBeVisible();
  });

  it('should show all restaurant when do empty search query, tap and show detail ', async () => {
    // Wait for the app to load the initial screen
    await expect(element(by.id('searchRestaurant'))).toBeVisible();

    // Type in search query
    await element(by.id('searchRestaurant')).typeText('');

    // Tap on search button
    await element(by.id('searchRestaurant')).tapReturnKey();

    // Wait for the app to navigate to Restaurant Screen
    await expect(element(by.id('restaurantScreen'))).toBeVisible();

    await waitFor(element(by.id('restaurantItem')).atIndex(0))
      .toBeVisible()
      .withTimeout(1000);

    // Tap on the first restaurant item in the list
    await element(by.id('restaurantItem')).atIndex(0).tap();

    // Wait for the app to navigate to Restaurant Menu Screen
    await expect(element(by.id('restaurantMenuScreen'))).toBeVisible();
  });

  it('should show specific restaurant, tap, and show the detail', async () => {
    await expect(element(by.id('searchRestaurant'))).toBeVisible();

    await element(by.id('searchRestaurant')).typeText('Pizza');

    await element(by.id('searchRestaurant')).tapReturnKey();

    await expect(element(by.id('restaurantScreen'))).toBeVisible();

    await expect(element(by.id('restaurantScreen'))).toBeVisible();

    await waitFor(element(by.id('restaurantItem')).atIndex(0))
      .toBeVisible()
      .withTimeout(1000);

    await element(by.id('restaurantItem')).atIndex(0).tap();

    await expect(element(by.id('restaurantMenuScreen'))).toBeVisible();
  });
});
