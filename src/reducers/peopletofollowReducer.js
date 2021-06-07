const initialState = {
  coworkers: [],
};

export default function common(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_COWORKERS':
      return {
        ...state,
        coworkers: action.payload,
      };

    case 'FOLLOW_UNFOLLOW':
      coworkers = state.coworkers.map(value => {
        if (action.id == value._id) {
          return {
            ...value,
            follow: !value.follow,
          };
        } else {
          return value;
        }
      });
      return {...state, coworkers};
    default:
      return state;
  }
}

// const reducename = (state = initialState , action) => {
//   if (action.type == "LOAD_COWORKERS") {
//     return {
//       ...state,
//       coworkers : action.payload,
//     };
//   }
//   return state;
// };
// export default reducename;
