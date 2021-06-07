import moment from 'moment';

const initialState = {
  renderEvents: [],
  todayEvents: [],
  thisWeekEvents: [],
  thisMonthEvents: [],
  prevEvents: [],
  eventsList: [],
  todayeventlist: [],
  eventView: {
    loading: true,
    eventData: {},
  },
  todaytotalevents: 0,
  page: 1,
  selectedDate: moment().format('YYYY-MM-DD'),
  currentPage: 1,
  limit: 15,
  totalEvents: 0,
  loading: true,
};

export default (state = initialState, action = {}) => {
  var renderEvents = state.renderEvents;
  switch (action.type) {
    case 'FETCH_TODAY_EVENT':
      if (action.data !== undefined && action.data.length > 0) {
        return {
          ...state,
          renderEvents: action.data,
          todayEvents: action.data,
          loading: false,
        };
      } else {
        return {
          ...state,
          renderEvents: [],
          loading: false,
        };
      }
    case 'FETCH_THIS_WEEK_EVENT':
      if (action.data !== undefined && action.data.length > 0) {
        return {
          ...state,
          renderEvents: action.data,
          thisWeekEvents: action.data,
          loading: false,
        };
      } else {
        return {
          ...state,
          renderEvents: [],
          loading: false,
        };
      }
    case 'FETCH_THIS_MONTH_EVENT':
      if (action.data !== undefined && action.data.length > 0) {
        return {
          ...state,
          renderEvents: action.data,
          thisMonthEvents: action.data,
          loading: false,
        };
      } else {
        return {
          ...state,
          renderEvents: [],
          loading: false,
        };
      }
    case 'FETCH_PREVIOUS_EVENT':
      if (action.data !== undefined && action.data.length > 0) {
        return {
          ...state,
          renderEvents: action.data,
          prevEvents: action.data,
          loading: false,
        };
      } else {
        return {
          ...state,
          renderEvents: [],
          loading: false,
        };
      }

    default:
      return state;

    case 'JOIN_EVENT':
      const events = state.renderEvents.map(value => {
        if (value.id === action.eventId) {
          return {
            ...value,
            participants: [action.data],
          };
        } else {
          return value;
        }
      });
      return {...state, renderEvents: events};
  }
};
