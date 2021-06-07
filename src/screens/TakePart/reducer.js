const initialState = {
  cardType: '',
  reason: '',
  option1: '',
  option2: '',
  description: '',
  groups: [],
};
export default function(state = initialState, action) {
  switch (action.type) {
    case 'CARD_TYPE':
      return {...state, cardType: action.cardType};
    case 'CARD_REASON':
      return {...state, reason: action.reason};
    case 'CARD_OPTION_1':
      return {...state, option1: action.option1};
    case 'CARD_OPTION_2':
      return {...state, option2: action.option2};
    case 'CARD_DESCRIPTION':
      return {...state, description: action.description};
    case 'UPDATE_SELECTED_GROUPS':
      let oldGroups = [...state.groups];
      let index = state.groups.indexOf(action.group);
      if (index !== -1) {
        let newList = oldGroups.splice(index, 1);
      } else {
        oldGroups.push(action.group);
      }
      return {...state, groups: oldGroups};

    default:
      return state;
  }
}
