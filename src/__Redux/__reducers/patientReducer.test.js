import patientReducer from './patientReducer';
import {patientConstants} from '../__constants/patientConstants';

describe('patientReducer', () => {
  it('fails to fetch patient data', () => {
    const expectedState = {loading: true, error: null};
    expect(
      patientReducer({}, {type: patientConstants.FETCH_PATIENTS_BEGIN}),
    ).toEqual(expectedState);
  });

  it('fetches patient data', () => {
    const expectedState = {
      items: {
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

      loading: false,
    };

    const recievedState = patientReducer(
      {},
      {
        type: patientConstants.FETCH_PATIENTS_SUCCESS,
        payload: {
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
      },
    );
    expect(recievedState).toEqual(expectedState);
  });
});
