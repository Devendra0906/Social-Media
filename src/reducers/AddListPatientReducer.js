const INITIAL_STATE = [];

const PatientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PATIENTS':
      return action.payload;

    case 'ADD_PATIENTS':
      console.log('done');
      return action.payload;

    default:
      return state;
  }
};

export default PatientReducer;
