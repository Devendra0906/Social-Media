describe('Patient List Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('is startscreen visible', async () => {
    await expect(element(by.id('startScreen'))).toBeVisible();
  });

  it('should open side menu', async () => {
    await element(by.id('SideMenuButton')).tap();
    await expect(element(by.id('slideMenu'))).toBeVisible();
  });
  it('Should open Patient list', async () => {
    await element(by.id('patientList')).tap();
    await expect(element(by.id('patientMainView'))).toBeVisible();
  });
  it('Main View should be vislible', async () => {
    await expect(element(by.id('patientMainView'))).toBeVisible();
  });
  it('Show Header', async () => {
    await expect(element(by.id('patientHeader'))).toBeVisible();
  });

  it('Is side menu btn visible', async () => {
    await expect(element(by.id('SideMenuBtn'))).toBeVisible();
  });
  it('Is Patient Center Header Visible', async () => {
    await expect(element(by.id('patientCenterHeader'))).toBeVisible();
  });
  it('Is Right Heafer Visibke', async () => {
    await expect(element(by.id('patientRightHeader'))).toBeVisible();
  });
  it('is CurrentlyTrialView visible', async () => {
    await expect(element(by.id('patientCurrentlyTrialView'))).toBeVisible();
  });
  it('is Patient View Visinble', async () => {
    await expect(element(by.id('ShowingPatientView'))).toBeVisible();
  });
  it('is Patient view visible', async () => {
    await expect(element(by.id('patientDetails'))).toBeVisible();
  });

  it('is selection button visible', async () => {
    await expect(element(by.id('pSelectionButton'))).toBeVisible();
  });
  it('is profile image visible', async () => {
    await expect(element(by.id('patientProfileImage'))).toBeVisible();
  });
  it('is patientBottom visible', async () => {
    await expect(element(by.id('patitentBottomButton'))).toBeVisible();
  });
});
