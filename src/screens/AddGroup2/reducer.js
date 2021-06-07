const cat1 = require('../../../assets/images/category/category_1.jpg');

const initialState = {
  selectedMembers: [],
  selectedSetting: {
    title: 'Teams & Projects',
    desctiption:
      'A space for smaller teams to work, with up to 250 members plus its own chat',
    image: cat1,
  },
  visibility: {
    title: 'Open',
    desctiption:
      'Anyone on Predapp GmBH can see the group, its members and thair posts.',
    image: cat1,
  },
  groupImage: require('./../../../assets/images/camera.png'),
  groupName: '',
  groupDescription: '',
  items: [],
};
export default function addGroupReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_SELECTED':
      let members = [...state.selectedMembers];
      if (action.isMulti) {
        let index = state.selectedMembers.indexOf(action.user);
        if (index !== -1) {
          let newList = members.splice(index, 1);
        } else {
          members.push(action.user);
        }
      } else {
        members = [action.user];
      }
      return {...state, selectedMembers: members};
    case 'SETTING_SELECTED':
      return {...state, selectedSetting: action.setting};
    case 'VISIBILITY_SETTING_SELECTED':
      return {...state, visibility: action.visibility};
    case 'SELECT_GROUP_ICON':
      return {...state, groupImage: action.icon};
    case 'UPDATE_GROUP_NAME':
      return {...state, groupName: action.name};
    case 'UPDATE_GROUP_DESCRIPTION':
      return {...state, groupDescription: action.description};
    case 'RESET_GROUP':
      return initialState;
    case 'GET_LIST':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'GET_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case 'GET_LIST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
