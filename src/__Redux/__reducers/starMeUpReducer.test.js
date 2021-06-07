import starmeReducer from './starMeUpReducer';

describe('testing star me reducer', () => {
  it('fails to fetch data', () => {
    const expectedState = {loading: true, error: null};
    expect(starmeReducer({}, {type: 'fetchStarMe'})).toEqual(expectedState);
  });
  it('fetches users data', () => {
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
      error: null,
    };
    const recievedState = starmeReducer(
      {},
      {
        type: 'fetchStarMeSuccess',
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
  it('error state', () => {
    const expectedState = {
      loading: false,
      error: 'error',
    };
    const recievedState = starmeReducer(
      {},
      {
        type: 'fetchStarMeFailure',
        payload: {
          error: 'error',
        },
      },
    );
    expect(recievedState).toEqual(expectedState);
  });
});
describe('testing comments', () => {
  it('failure in getting comments', () => {
    const expectedState = {
      loading: false,
      error: 'error',
    };
    const recievedState = starmeReducer(
      {},
      {
        type: 'fetchStarMeCmtsFailure',
        payload: {
          error: 'error',
        },
      },
    );
    expect(recievedState).toEqual(expectedState);
  });
  it('fetches star me comments successfully', () => {
    const expectedState = {
      cmts: {
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
      error: null,
    };
    const recievedState = starmeReducer(
      {},
      {
        type: 'fetchStarMeCmtsSuccess',
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
  it('like and unlike comment', () => {
    const expectedState = {
      id: '1',
    };
    const recievedState = starmeReducer(
      {},
      {
        type: 'LikeUnlikeComment',
        payload: {
          id: '1',
        },
      },
    );
    expect(recievedState).toEqual(expectedState);
  });
});
