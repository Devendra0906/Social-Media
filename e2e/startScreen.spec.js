import localizedStrings from '../src/Helper/LocalisedString';

describe('Start Screen testiing', () => {
  beforeAll(async () => {
    await detox.device.launchApp({newInstance: true});
  });

  it('is startscreen visible', async () => {
    await expect(element(by.id('startScreen'))).toBeVisible();
  });

  it('is statusMainContainer visible', async () => {
    await expect(element(by.id('statusMainContainer'))).toBeVisible();
  });
  it('status Cnt to have text', async () => {
    await expect(element(by.id('statusCnt'))).toHaveText('5');
  });
  it('pendingText to have text', async () => {
    await expect(element(by.id('pendingText'))).toHaveText(
      localizedStrings.startScreen.Pending,
    );
  });
  it('toDoText to have ', async () => {
    await expect(element(by.id('toDoText'))).toHaveText(
      localizedStrings.startScreen.ToDo,
    );
  });
  it('startedText to have text', async () => {
    await expect(element(by.id('startedText'))).toHaveText(
      localizedStrings.startScreen.Started,
    );
  });
  it('doneText to have text', async () => {
    await expect(element(by.id('doneText'))).toHaveText(
      localizedStrings.startScreen.Done,
    );
  });
  it('is calender visible', async () => {
    await expect(element(by.id('calender'))).toBeVisible();
  });
  it('is patientsList visible', async () => {
    await expect(element(by.id('patientsList'))).toBeVisible();
  });
});
