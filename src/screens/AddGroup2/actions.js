import axios from 'axios';
// import {appointmentConstants} from '../__constants/appointmentConstants';
var apiUrl = 'http://10.0.2.2:8000';
export const fetchList = () => {
  return dispatch => {
    dispatch({
      type: 'GET_LIST',
    });
    axios
      .get(`${apiUrl}/api/starmeup/recent/?skip=0&limit=6`)
      .then(response => {
        // console.log(response);
        dispatch({
          type: 'GET_LIST_SUCCESS',
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log('failed', error);
        dispatch({
          type: 'GET_LIST_FAILURE',
          payload: {error},
        });
        //handleErrors(error)
      });
  };
};
export function userHasSelected(user, isMulti) {
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
