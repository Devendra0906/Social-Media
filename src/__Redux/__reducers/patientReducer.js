import {patientConstants} from '../__constants/patientConstants';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function patientReducer(state = initialState, action) {
  switch (action.type) {
    case patientConstants.FETCH_PATIENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case patientConstants.FETCH_PATIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case patientConstants.FETCH_PATIENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case 'ADD_PATIENT':
      const items = state.items.concat(action.payload);
      return {...state, items};

    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };

    default:
      return state;
  }
}
