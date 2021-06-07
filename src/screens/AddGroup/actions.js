export function fetchMembers() {
  return dispatch => {
    dispatch({
      type: 'fetchMembers',
    });
    axios
      .get(`${myConfig.apiUrl}/api/starmeup/recent/?skip=0&limit=100`)
      .then(response => {
        // console.log(response.data.data[0]);
        dispatch({
          type: 'fetchMembersSuccess',
          payload: response.data.data,
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: 'fetchMembersFailure',
          payload: {error},
        });
        //handleErrors(error)
      });
  };
}
export function userHasSelected(user, isMulti = false) {
  return {
    type: 'USER_SELECTED',
    user: user,
    isMulti: isMulti,
  };
}

export function didSelectGroupSettngs(setting) {
  return {
    type: 'SETTING_SELECTED',
    setting: setting,
  };
}

export function didSelectVisibilitySettngs(visibility) {
  return {
    type: 'VISIBILITY_SETTING_SELECTED',
    visibility: visibility,
  };
}

export function didUpdateGroupIcon(icon) {
  return {
    type: 'SELECT_GROUP_ICON',
    icon: icon,
  };
}

export function didUpdateGroupName(name) {
  return {
    type: 'UPDATE_GROUP_NAME',
    name: name,
  };
}

export function didUpdateGroupdescription(description) {
  return {
    type: 'UPDATE_GROUP_DESCRIPTION',
    description: description,
  };
}

export function resetGroupData() {
  return {
    type: 'RESET_GROUP',
  };
}
