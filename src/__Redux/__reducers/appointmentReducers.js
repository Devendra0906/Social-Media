import {appointmentConstants} from '../__constants/appointmentConstants';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function appointmentReducer(state = initialState, action) {
  switch (action.type) {
    case appointmentConstants.FETCH_APPOINTMENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case appointmentConstants.FETCH_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case appointmentConstants.FETCH_APPOINTMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case appointmentConstants.SET_APPOINTMENT:
      const items = state.items.concat(action.payload);
      return {...state, items};

    case appointmentConstants.DELETE_APPOINTMENTS:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case appointmentConstants.EDIT_APPOINTMENT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
}
