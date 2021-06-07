const initialState = {
  // New States
  receivedList: [],
  sentList: [],
  requestsList: [],
  ratedFeedbackBarChart: {},
  weeklyFeedbackData: [],
  topEmployeesData: [],
  loading: true,
  currentPage: 1,
  limit: 15,
  totalData: 0,
};

export default function betterme(state = initialState, action = {}) {
  // console.log('data is', action.data);
  switch (action.type) {
    case 'FETCH_RECEIVED_FEEDBACKS':
      return {
        ...state,
        receivedList: action.data,
        currentPage: action.data.currentPage,
        totalData: action.data.totalData,
        loading: false,
      };
    default:
      return state;

    case 'FETCH_SENT_FEEDBACKS':
      return {
        ...state,
        sentList: action.data,
        currentPage: action.data.currentPage,
        totalData: action.data.totalData,
        loading: false,
      };

    case 'FETCH_FEEDBACK_REQUESTS':
      // console.log("redu hai",action.data);
      return {
        ...state,
        requestsList: action.data,
        currentPage: action.data.currentPage,
        totalData: action.data.totalData,
        loading: false,
      };

    case 'ADD_FEEDBACK_REQUESTS':
      return {
        ...state,
        ...action.data,
        loading: false,
      };

    case 'ADD_SENT_REQUESTS':
      return {
        ...state,
        ...action.data,
        loading: false,
      };
  }
}
