import localizedStrings from '../src/Helper/LocalisedString';
describe('Add Appointment List Test', () => {
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
  it('open Appointment option', async () => {
    await element(by.id('appointmentList')).tap();
    await expect(element(by.id('AppMainView'))).toExist();
  });
  it('is main view exist', async () => {
    await expect(element(by.id('AppMainView'))).toExist();
  });
  it('lodign test', async () => {
    await expect(element(by.id('loadingtxt'))).toHaveText('loading...');
  });
  it('is date pickerr visible', async () => {
    await expect(element(by.id('datePicker'))).toBeVisible();
  });
  it('is header visible', async () => {
    await expect(element(by.id('AppHeader'))).toBeVisible();
  });
  it('is l - header visible', async () => {
    await expect(element(by.id('LeftHeader'))).toBeVisible();
  });
  it('center text match', async () => {
    await expect(element(by.id('AppCentertext'))).toHaveText(
      localizedStrings.appointmentList.appointments,
    );
  });
  it('is App subheader Visible', async () => {
    await expect(element(by.id('AppSubHeader'))).toBeVisible();
  });
  it('is new text matches', async () => {
    await expect(element(by.id('newText'))).toHaveText(
      localizedStrings.appointmentList.ne,
    );
  });
  it('confirm text matches', async () => {
    await expect(element(by.id('confirmtext'))).toHaveText(
      localizedStrings.appointmentList.confirmed,
    );
  });
  it('is confirm visible', async () => {
    await expect(element(by.id('AppConfirm'))).toHaveText(
      localizedStrings.appointmentList.confirm,
    );
  });
  it(' resheduleText match', async () => {
    await expect(element(by.id('resheduleText'))).toHaveText(
      localizedStrings.appointmentList.reschedule,
    );
  });
  it('cancelText matches', async () => {
    await expect(element(by.id('cancelText'))).toHaveText(
      localizedStrings.appointmentList.cancel,
    );
  });
  it('resheduleApptext mathces', async () => {
    await expect(element(by.id('resheduleApptext'))).toHaveText(
      localizedStrings.appointmentList.rescheduleAppointment,
    );
  });
  it('is ResheduleDate visible', async () => {
    await expect(element(by.id('ResheduleDate'))).toBeVisible();
  });
  it('ResheduleDateText mathces', async () => {
    await expect(element(by.id('ResheduleDateText'))).toHaveText(
      localizedStrings.appointmentList.rescheduledDate,
    );
  });
  it('rescheduledTimeText matches', async () => {
    await expect(element(by.id('rescheduledTimeText'))).toHaveText(
      localizedStrings.appointmentList.rescheduledTime,
    );
  });
  it('noSlots matches', async () => {
    await expect(element(by.id('noSlots'))).toHaveText(
      localizedStrings.appointmentList.noSlots,
    );
  });
  it('rescheduleNote matches', async () => {
    await expect(element(by.id('rescheduleNote'))).toHaveText(
      localizedStrings.appointmentList.rescheduleNote,
    );
  });
});
