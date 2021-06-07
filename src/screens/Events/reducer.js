import moment from 'moment';

const initialState = {
  eventImage: require('./../../../assets/images/event_BG.jpg'),
  eventName: '',
  eventDescription: '',
  eventLocation: '',
  startDate: 'Today',
  startTime: moment().format('LT'),
  endDate: '',
  endTime: '',
  canInvite: true
};
export default function (state: any = initialState, action: Function) {
  switch (action.type) {
    case "SELECT_EVENT_ICON":
      return { ...state, eventImage: action.icon }
    case "UPDATE_EVENT_NAME":
      return { ...state, eventName: action.name }
    case "UPDATE_EVENT_DESCRIPTION":
      return { ...state, eventDescription: action.description }
    case "UPDATE_EVENT_LOCATION":
      return { ...state, eventLocation: action.location }
    case "UPDATE_EVENT_START_TIME":
      return { ...state, startTime: action.startTime }
    case "UPDATE_EVENT_START_DATE":
      return { ...state, startDate: action.startDate }
    case "UPDATE_EVENT_END_TIME":
      return { ...state, endTime: action.endDate }
    case "UPDATE_EVENT_END_DATE":
      return { ...state, endDate: action.endTime }
    case "CAN_INVITE_COWORKERS":
      return { ...state, canInvite: action.canInvite }
    case "RESET_EVENT":
      return initialState

    default:
      return state;
  }
}
