import {combineReducers} from 'redux';
import patientReducer from './patientReducer';
import appointmentReducer from './appointmentReducers';
import notesReducer from './notesReducers';
import starmeReducer from './starMeUpReducer';
import takePartReducer from './takePartReducers';
import AddGroupReducer from '../../screens/AddGroup/reducer';
import profileReducer from './profileReducers';
import newsfeed from '../../reducers/newsfeedreducer';

// import settings from '../screens/Settings/reducer';
import peopletofollow from '../../reducers/peopletofollowReducer';
import events from '../../reducers/eventsreducer';
// import takepart from '../../reducers/tak';
import betterme from '../../reducers/bettermereducer';
export default combineReducers({
  patientReducer,
  newsfeed,
  appointmentReducer,
  notesReducer,
  starmeReducer,
  AddGroupReducer,
  takePartReducer,
  profileReducer,
  peopletofollow,
  events,
  betterme,
});
