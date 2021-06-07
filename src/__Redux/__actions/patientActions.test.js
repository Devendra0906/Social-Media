import {patientConstants} from '../__constants/patientConstants';
import * as actions from './patientActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
it('creates an action to initialize fetch patient data', () => {
  const expectedAction = {type: patientConstants.FETCH_PATIENTS_BEGIN};

  expect(actions.fetchPatientsBegin()).toEqual(expectedAction);
});

it('creates an action to get patients data', () => {
  const expectedAction = {
    type: patientConstants.FETCH_PATIENTS_SUCCESS,
    payload: {
      patients: [
        {
          id: 83323135,
          firstName: 'Janellea',
          lastName: 'Hellera',
          email: 'Ellis_Armstrong49@yahoo.coma',
          mobilePrefix: '+91',
          mobile: '9924656000',
          gender: 'male',
          birthDate: '1996/09/27',
          patientId: '3a2s4d6a5rf1',
        },
      ],
    },
  };

  expect(
    actions.fetchPatientsSuccess([
      {
        id: 83323135,
        firstName: 'Janellea',
        lastName: 'Hellera',
        email: 'Ellis_Armstrong49@yahoo.coma',
        mobilePrefix: '+91',
        mobile: '9924656000',
        gender: 'male',
        birthDate: '1996/09/27',
        patientId: '3a2s4d6a5rf1',
      },
    ]),
  ).toEqual(expectedAction);
});

it('creates an action for failue in fetching data', () => {
  const expectedAction = {
    type: patientConstants.FETCH_PATIENTS_FAILURE,
    payload: {error: 'e'},
  };

  expect(actions.fetchPatientsFailure('e')).toEqual(expectedAction);
});

it('creates an async action to fetch the patients data', () => {
  const expectedActions = [
    {type: patientConstants.FETCH_PATIENTS_BEGIN},
    {
      payload: {
        patients: [
          {
            id: 83323135,
            firstName: 'Janellea',
            lastName: 'Hellera',
            email: 'Ellis_Armstrong49@yahoo.coma',
            mobilePrefix: '+91',
            mobile: '9924656000',
            gender: 'male',
            birthDate: '1996/09/27',
            patientId: '3a2s4d6a5rf1',
          },
        ],
      },
      type: patientConstants.FETCH_PATIENTS_SUCCESS,
    },
  ];
  const createMockStore = configureMockStore([thunk]);
  const store = createMockStore({patients: {}});

  //   return store.dispatch(actions.fetchPatients()).then(() => {
  //     expect(store.getActions().patients).toEqual(expectedActions);
  //   });
});
