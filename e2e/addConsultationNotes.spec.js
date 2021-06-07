import localizedStrings from '../src/Helper/LocalisedString';

describe('Add Consultaion Notes Test', () => {
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
  it('open consultaion notes', async () => {
    await element(by.id('consultationNotes')).tap();
    await expect(element(by.id('ConHeader'))).toBeVisible();
  });
  it('is main view visible', async () => {
    await expect(element(by.id('acnMainView'))).toBeVisible();
  });
  it('is header visible', async () => {
    await expect(element(by.id('acnHeader'))).toBeVisible();
  });
  it('is left header visible', async () => {
    await expect(element(by.id('acnLeftHeader'))).toBeVisible();
  });
  it('is center header visible', async () => {
    await expect(element(by.id('acnCenterHeader'))).toBeVisible();
  });
  it('is right header visible', async () => {
    await expect(element(by.id('acnRightHeader'))).toBeVisible();
  });
  it('are docor details visible', async () => {
    await expect(element(by.id('acnDoctorDetails'))).toBeVisible();
  });
  it('are patient details visible', async () => {
    await expect(element(by.id('acnPatientDetails'))).toBeVisible();
  });
  it('is ConsultationDateTime visible', async () => {
    await expect(element(by.id('ConsultationDateTime'))).toBeVisible();
  });
  it('are AssociateAppointment visible', async () => {
    await expect(element(by.id('AssociateAppointment'))).toBeVisible();
  });
  it('is ConsultationReason visible', async () => {
    await expect(element(by.id('ConsultationReason'))).toBeVisible();
  });
  it('ConsultationReason Head matches', async () => {
    await expect(element(by.id('ConsultationReasonHead'))).toHaveText(
      'Reason for Consultation',
    );
  });
  it('are ReviewNotes visible', async () => {
    await expect(element(by.id('ReviewNotes'))).toBeVisible();
  });
  it('ReviewNotesHead text matches', async () => {
    await expect(element(by.id('ReviewNotesHead'))).toHaveText('Review Note');
  });
  it('is Attachments visible', async () => {
    await expect(element(by.id('Attachments'))).toBeVisible();
  });
  it('Attachments text matches', async () => {
    await expect(element(by.id('AttachmentsText'))).toHaveText(
      'Add Attchments[Max size 5MB per file]',
    );
  });
  it('is ImageCell visible', async () => {
    await expect(element(by.id('ImageCell'))).toBeVisible();
  });
  it('is PrescriptionList visible', async () => {
    await expect(element(by.id('PrescriptionList'))).toBeVisible();
  });
  it('isPrescriptionList Text visible', async () => {
    await expect(element(by.id('PrescriptionListText'))).toHaveText(
      'Prescription',
    );
  });
});
