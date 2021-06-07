// const AppointmentList = require('./index.js');
import AppointmentList from './index';
jest.mock('./index.js');
beforeEach(() => {
  AppointmentList.mockClear();
});
it('tests run correctly', async () => {
  const AList = new AppointmentList();
  const res = AList.testfn(9);
  res = jest.fn(x => x + 1);
  expect(res).toBe(10);
});
