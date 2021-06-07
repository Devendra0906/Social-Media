import localizedStrings from '../src/Helper/LocalisedString';

describe('Starmeup Testing', () => {
  beforeAll(async () => {
    await detox.device.launchApp({newInstance: true});
  });

  it('is startscreen visible', async () => {
    await expect(element(by.id('startScreen'))).toBeVisible();
  });

  it('should open side menu', async () => {
    await element(by.id('SideMenuButton')).tap();
    await expect(element(by.id('slideMenu'))).toBeVisible();
  });

  it('is dashboard visible', async () => {
    await element(by.id('StarMeUpDashboard')).tap();
    await expect(element(by.id('starmeupDashboard'))).toBeVisible();
  });
  it('is profile img visible', async () => {
    await expect(element(by.id('starProfileImg'))).toBeVisible();
  });
  it('is person name visible', async () => {
    await expect(element(by.id('starName'))).toBeVisible();
  });
  it('is postedBy profile visible', async () => {
    await expect(element(by.id('postedBy'))).toBeVisible();
  });
  it('is posted profile ByImg visible', async () => {
    await expect(element(by.id('postedByImg'))).toBeVisible();
  });
  it('is postedBy Name visible', async () => {
    await expect(element(by.id('postedByName'))).toBeVisible();
  });
  it('is feed visible', async () => {
    await expect(element(by.id('feed'))).toBeVisible();
  });
  it('Navigate to StarMeUpDetails', async () => {
    await element(by.id('StarMeUpDetails')).tap();
    await expect(element(by.id('starMeDetails'))).toBeVisible();
  });
});
