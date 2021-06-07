import * as actions from './StarMeUpActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
it('creates an action to initialize fetch starmeup data', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  const expectedAction = {type: 'fetchStarMe'};
  expect(actions.fetchStarMeCmts('1', '12')).toEqual(expectedAction);
});
