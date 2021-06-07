import {notesConstants} from '../__constants/notesConstants';
const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case notesConstants.FETCH_NOTES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case notesConstants.FETCH_NOTES_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        items: action.payload,
      };

    case notesConstants.FETCH_NOTES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case notesConstants.SET_NOTE:
      const items = state.items.concat(action.payload);
      return {...state, items};

    case notesConstants.DELETE_NOTES:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
}
