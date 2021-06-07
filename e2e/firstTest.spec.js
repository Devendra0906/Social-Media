import localizedStrings from '../src/Helper/LocalisedString';

describe('start the test', () => {
  beforeAll(async () => {
    await detox.device.launchApp({newInstance: true});
  });

  //   beforeEach(async () => {
  //     await device.reloadReactNative();
  //   });

  it('is startscreen visible', async () => {
    await expect(element(by.id('startScreen'))).toBeVisible();
  });

  it('should open side menu', async () => {
    await element(by.id('SideMenuButton')).tap();
    await expect(element(by.id('slideMenu'))).toBeVisible();
  });
  it('iopen consultaion notes', async () => {
    await element(by.id('consultationNotes')).tap();
    await expect(element(by.id('ConHeader'))).toBeVisible();
  });
  it('is back btn visible', async () => {
    await expect(element(by.id('ConbackBtn'))).toBeVisible();
  });
  it('Center Header Mathces', async () => {
    await expect(element(by.id('ConCenterHeader'))).toHaveText(
      localizedStrings.consultationNotes.consultationNotes,
    );
  });
  it('is right header visible', async () => {
    await expect(element(by.id('ConRightHeader'))).toBeVisible();
  });
  it('is patatient details visible', async () => {
    await expect(element(by.id('patientDetails'))).toBeVisible();
  });
  it('is Filter Notes Option visible', async () => {
    await expect(element(by.id('FilterNotes'))).toBeVisible();
  });
  it('ShowingText matches', async () => {
    await expect(element(by.id('ShowingText'))).toHaveText(
      localizedStrings.consultationNotes.showing,
    );
  });
  it('allConsultation Text matches', async () => {
    await expect(element(by.id('allConsultation'))).toHaveText(
      localizedStrings.consultationNotes.allConsultations,
    );
  });
  it('filterText matches', async () => {
    await expect(element(by.id('filterText'))).toHaveText(
      localizedStrings.consultationNotes.filter,
    );
  });
  it('does introText matches', async () => {
    await expect(element(by.id('introText'))).toHaveText(
      localizedStrings.consultationNotes.introText,
    );
  });
  it('logConsultation matches', async () => {
    await expect(element(by.id('logConsultation'))).toHaveText(
      localizedStrings.consultationNotes.logConsultation,
    );
  });
});
