import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import reducer from "../reducers";
import storage from "@react-native-community/async-storage";
import groupMembersReducer from "./../screens/AddGroup/reducer";
import eventCreateReducer from './../screens/Events/reducer';
import postReducer from "./../screens/UpdatePost/reducer";
import takePaerReducer from './../screens/TakePart/reducer';

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, reducer);
const combinedReducer = combineReducers({
  persistedReducer,
  groupMembersReducer,
  eventCreateReducer,
  postReducer,
  takePaerReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combinedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
