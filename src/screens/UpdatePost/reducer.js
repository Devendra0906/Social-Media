const initialState = {
  users: [],
  postImage: undefined,
  postDescription: "",
  location: ""
};

export default function (state: any = initialState, action: Function) {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, postDescription: action.description };
    case "IMAGE_SELECTED":
      return { ...state, postImage: action.image };
    case "LOCATION_SELECTED":
      return { ...state, location: action.location };
    case "UPDATE_TAG_USERS":
      let members = [...state.users]
      let index = state.users.indexOf(action.user);
      if (index !== -1) {
        let newList = members.splice(index, 1);
      } else {
        members.push(action.user)
      }
      return { ...state, users: members }
    case "RESET_GROUP":
      return initialState
    default:
      return state;
  }
}
