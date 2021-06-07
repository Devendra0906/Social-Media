import localizedStrings from '../src/Helper/LocalisedString';

describe('Add Patient Screen Test', () => {
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
  it('open patient list', async () => {
    await element(by.id('patientList')).tap();
    await expect(element(by.id('patientMainView'))).toBeVisible();
  });

  it('open AddPatient menu', async () => {
    await element(by.id('AddPatientButton')).tap();
    await expect(element(by.id('AddPMainView'))).toExist();
  });

  it('is Main View getting rendered', async () => {
    await expect(element(by.id('AddPMainView'))).toExist();
  });
  it('is first name field visible', async () => {
    await expect(element(by.id('FirstName'))).toBeVisible();
  });
  it('is first name header', async () => {
    await expect(element(by.id('FirstNameHead'))).toHaveText(
      localizedStrings.addPatient.firstName,
    );
  });
  it('is patient detail vievisible', async () => {
    await expect(element(by.id('patientTest'))).toBeNotVisible();
  });
  it('DOB field', async () => {
    await expect(element(by.id('dobField'))).toHaveText(
      localizedStrings.addPatient.dob,
    );
  });
  it('gender Field', async () => {
    await expect(element(by.id('genderField'))).toHaveText(
      localizedStrings.addPatient.gender,
    );
  });
  it('is PatientID ', async () => {
    await expect(element(by.id('PatientID'))).toHaveText(
      localizedStrings.addPatient.patientId,
    );
  });
  it('is header getting rendered', async () => {
    await expect(element(by.id('AddPHeader'))).toBeVisible();
  });
  it('is Header back button Visible', async () => {
    await expect(element(by.id('AddPBackBtn'))).toBeVisible();
  });
  it('is center Header visible', async () => {
    await expect(element(by.id('AddPCenterHeader'))).toHaveText('addPatient');
  });
  it('is right Header Visible', async () => {
    await expect(element(by.id('AddPRightHeader'))).toBeVisible();
  });
  it('is changeprofile Pic option available', async () => {
    await expect(element(by.id('ProfilePic'))).toBeVisible();
  });
  it('is email Address getting rendered', async () => {
    await expect(element(by.id('AppPEmailAddress'))).toBeVisible();
  });
  it('is email Address text visible', async () => {
    await expect(element(by.id('emailAdder'))).toHaveText('Email Address');
  });
  it('is MobileNumber field Getting rendered', async () => {
    await expect(element(by.id('AddPRenderMob'))).toBeVisible();
  });
  it('is Image Before ', async () => {
    await expect(element(by.id('AddPMobileImg'))).toBeVisible();
  });
  it('is Mobile Number input header Visible', async () => {
    await expect(element(by.id('MobileNo'))).toHaveText(
      localizedStrings.addPatient.mobileNumber,
    );
  });
});
