import {createStore, applyMiddleware} from 'redux';
import PatientReducer from '../src/reducers/AddListPatientReducer';
import ReduxThunk from 'redux-thunk';

const middlewares = [ReduxThunk];

// export const storeFactory = (initialState) => {
//   return createStore(PatientReducer, initialState);
// };

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddleware(PatientReducer, initialState);
};
