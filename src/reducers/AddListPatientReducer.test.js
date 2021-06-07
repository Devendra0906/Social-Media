import PatientReducer from './AddListPatientReducer';

describe('Testing the reducer AddListPatientReducer', () => {
  test('initial state is empty array', () => {
    const newState = PatientReducer(undefined, {type: 'something'});
    expect(newState).toEqual([]);
  });
  test('GET_PATIENTS will give undifined because server not active', () => {
    const newState = PatientReducer(undefined, {type: 'GET_PATIENTS'});
    expect(newState).toEqual(undefined);
  });
  test('ADD_PATIENTS will give undifined because server not active', () => {
    const newState = PatientReducer(undefined, {type: 'ADD_PATIENTS'});
    expect(newState).toEqual(undefined);
  });
});
