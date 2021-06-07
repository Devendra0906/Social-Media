import axios from 'axios';
import {appointmentConstants} from '../__constants/appointmentConstants';
var apiUrl = 'http://10.0.2.2:8010';
export const fetchAppointments = () => {
  return dispatch => {
    dispatch({
      type: appointmentConstants.FETCH_APPOINTMENTS_BEGIN,
    });
    axios
      .get(
        `${apiUrl}/api/testcache/appointments/8423b5d7-574f-4072-ba85-f05053cd4b70`,
      )
      .then(response => {
        // console.log(response);
        dispatch({
          type: appointmentConstants.FETCH_APPOINTMENTS_SUCCESS,
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log('failed', error);
        dispatch({
          type: appointmentConstants.FETCH_APPOINTMENTS_FAILURE,
          payload: {error},
        });
        //handleErrors(error)
      });
  };
};

export const setAppointment = appointmentObj => {
  return dispatch => {
    const obj = JSON.stringify(appointmentObj);
    axios
      .post(`${apiUrl}/api/add`, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: appointmentConstants.SET_APPOINTMENT,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const editAppointment = appointmentObj => {
  console.log(appointmentObj.id);

  return dispatch => {
    const obj = JSON.stringify(appointmentObj);
    axios
      .put(`${apiUrl}/api/users/update/` + appointmentObj.id, obj, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': true,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: appointmentConstants.EDIT_APPOINTMENT,
          payload: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteAppointments = id => {
  return dispatch => {
    axios
      .delete(`${apiUrl}/api/delete/` + id, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        dispatch({
          type: appointmentConstants.DELETE_APPOINTMENTS,
          payload: response.data.data[0],
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

function handleErrors(response) {
  console.log(response);
  if (response.status != 200) {
    throw Error(response.statusText);
  }
  return response;
}
