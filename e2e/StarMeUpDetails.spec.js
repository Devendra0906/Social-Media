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

  it('is starme  page visible', async () => {
    await element(by.id('StarMeUpDashboard')).tap();
    await expect(element(by.id('starmeupDashboard'))).toBeVisible();
  });
  it('is starme details page visible', async () => {
    await element(by.id('StarMeUpDetails')).tap();
    await expect(element(by.id('starMeDetails'))).toBeVisible();
  });
  it('is bottomContainer visible', async () => {
    await expect(element(by.id('bottomContainer'))).toBeVisible();
  });
  it('sendBy string matches', async () => {
    await expect(element(by.id('sendBy'))).toHaveText(
      localizedStrings.starMeUpDashboard.sendBy,
    );
  });
  it('is postedBy Name visible', async () => {
    await expect(element(by.id('postedByName'))).toBeVisible();
  });
  it('is heartIcon visible', async () => {
    await expect(element(by.id('heartIcon'))).toBeVisible();
  });
  it('is likeCount visible', async () => {
    await expect(element(by.id('likeCount'))).toHaveText('Like Users');
  });
  it('addText visible', async () => {
    await expect(element(by.id('addText'))).toHaveText('Add');
  });
  it('TextComment string', async () => {
    await expect(element(by.id('thisIsTextComment'))).toHaveText(
      localizedStrings.starMeUpDashboard.thisIsTextComment,
    );
  });
  it('', async () => {
    await expect(element(by.id(''))).toBeVisible();
  });
  it('', async () => {
    await expect(element(by.id(''))).toBeVisible();
  });
  it('', async () => {
    await expect(element(by.id(''))).toBeVisible();
  });
});
