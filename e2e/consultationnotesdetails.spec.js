import localizedStrings from '../src/Helper/LocalisedString';

describe('Add consultaion notes details Test', () => {
  //   beforeAll(async () => {
  //     await device.launchApp();
  //   });

  //   beforeEach(async () => {
  //     await device.reloadReactNative();
  //   });
  beforeAll(async () => {
    await detox.device.launchApp({newInstance: true});
  });
  it('should open side menu', async () => {
    await element(by.id('SideMenuButton')).tap();
    await expect(element(by.id('slideMenu'))).toBeVisible();
  });
  it('should open side menu', async () => {
    await element(by.id('consultationNotes')).tap();
    await expect(element(by.id('ConHeader'))).toBeVisible();
  });
  it('is header visible', async () => {
    await element(by.id('consultationNotesDetails')).tap();
    await expect(element(by.id('ConHeader'))).toBeVisible();
  });
  it('is header visible', async () => {
    await expect(element(by.id('cdheader'))).toBeVisible();
  });
  it('is left header visible', async () => {
    await expect(element(by.id('cdLeftHeader'))).toBeVisible();
  });
  it('CenterHeader text matches', async () => {
    await expect(element(by.id('cdCenterHeader'))).toHaveText(
      localizedStrings.consultationNotes.consultationNotes,
    );
  });
  it('RightHeader visible', async () => {
    await expect(element(by.id('cdRightHeader'))).toBeVisible();
  });
  it('is ClinicConsultation visible', async () => {
    await expect(element(by.id('ClinicConsultation'))).toBeVisible();
  });
  it('is ClinicConsultation head mathces', async () => {
    await expect(element(by.id('ClinicConsultationText'))).toHaveText(
      localizedStrings.consultationNotes.clinicConsultation,
    );
  });
  it('is user details view visible', async () => {
    await expect(element(by.id('cdUserDetails'))).toBeVisible();
  });
  it('is profile image visible', async () => {
    await expect(element(by.id('cdProfileImg'))).toBeVisible();
  });
  it('is patient name visible', async () => {
    await expect(element(by.id('cdName'))).toBeVisible();
  });
  it('is gender field visible', async () => {
    await expect(element(by.id('cdgender'))).toBeVisible();
  });
  it('is Reason For Consultation visible', async () => {
    await expect(element(by.id('ReasonForConsultation'))).toBeVisible();
  });
  it('ReasonForConsultation label text matches', async () => {
    await expect(element(by.id('textReasonForConsultation'))).toHaveText(
      localizedStrings.consultationNotes.reasonForConsultation,
    );
  });
  it('is ClinicSummary visible', async () => {
    await expect(element(by.id('ClinicSummary'))).toBeVisible();
  });
  it('is Clinic Summary Label matches', async () => {
    await expect(element(by.id('ClinicSummaryLabel'))).toHaveText(
      localizedStrings.consultationNotes.clinicSummary,
    );
  });
  it('is visible To Patient text mathces', async () => {
    await expect(element(by.id('visibleToPatient'))).toHaveText(
      localizedStrings.consultationNotes.visibleToPatient,
    );
  });
  it('is view Attachment text macthes', async () => {
    await expect(element(by.id('viewAttachment'))).toHaveText(
      ocalizedStrings.consultationNotes.viewAttachment,
    );
  });
  it('is Prescriptions visible', async () => {
    await expect(element(by.id('Prescriptions'))).toBeVisible();
  });
  it('Prescriptions text matches', async () => {
    await expect(element(by.id('PrescriptionsLabel'))).toBeVisible(
      localizedStrings.consultationNotes.prescriptions,
    );
  });
  it('is Goals visible', async () => {
    await expect(element(by.id('Goals'))).toBeVisible();
  });
  it('Goals text matches', async () => {
    await expect(element(by.id('GoalsLabel'))).toHaveText(
      localizedStrings.consultationNotes.goals,
    );
  });
  it('attachmentstext matches?', async () => {
    await expect(element(by.id('attachments'))).toHaveText(
      localizedStrings.consultationNotes.attachments,
    );
  });
  it('is Prof-Img visible', async () => {
    await expect(element(by.id('cdProfImg'))).toBeVisible();
  });
  it('is done visible?', async () => {
    await expect(element(by.id('doneLabel'))).toHaveText(
      localizedStrings.consultationNotes.done,
    );
  });
});
