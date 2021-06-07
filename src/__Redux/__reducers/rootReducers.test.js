// import rootReducer from './rootReducer';
import {combineReducers} from 'redux';

import patientReducer from './patientReducer';
import appointmentReducer from './appointmentReducers';
import {createStore, applyMiddleware} from 'redux';
let rootReducer = combineReducers({patientReducer, appointmentReducer});

describe('rootReducer', () => {
  let store = createStore(rootReducer);

  it('initializes the default state', () => {
    const expectedState = {items: [], loading: false, error: null};
    // expect(rootReducer({}, {})).toEqual({patientReducer: expectedState});
    expect(store.getState().patientReducer).toEqual(
      patientReducer(undefined, {}),
    );
  });
});
